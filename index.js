const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
let teamCards = [];

const buildTeam = () => {
    inquirer.prompt ([
        {   
            type: "list",
            name: "build",
            message: "Add Employee or Build Team?",
            choices: ["Add Employee", "Build Team"],
        }
    ])
    .then((data) => {
        if (data.build === "Add Employee") {
            questions();
        } else if (data.build === "Build Team") {
            let createCards = generateHTML.cardOptionsHTML(teamCards);
            writeToFile("./dist/index.html", generateHTML.initialHTML());
            generateHTML.HTMLBuild();
            generateHTML.finalHTML();
        } 
    })
};

const questions = () => {
    inquirer.prompt ([
        {
            type: "list",
            name: "jobtitle",
            message: "What is the Employees Job Title?",
            choices: ["Manager", "Intern", "Engineer", "Build Team"],
        },
    ])
    .then((data) => {
        // initialHTML
        if (data.jobtitle === "Manager") {
            managerQ();
        } else if (data.jobtitle === "Intern") {
            internQ();
        } else if (data.jobtitle === "Engineer") {
            engineerQ();
        } 
    })
}

const managerQ = () => {
    console.log("manager called");
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the employees name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employees ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the employees email address?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number?",
        }
    ])
    .then((data) => {
    const managerCard = new Manager(data.name, data.id, data.email, data.officeNumber);
        teamCards.push(managerCard);
        buildTeam();
    })

};

const internQ = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the employees name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employees ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the employees email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What school do they attend?",
        }
    ])
        .then((data) => {
        const internCard = new Intern(data.name, data.id, data.email, data.school);
        teamCards.push(internCard);
        buildTeam();
    })
};

const engineerQ = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the employees name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employees ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the employees email address?",
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is there GitHub username?",
        }
    ])
    .then((data) => {
        const engineerCard = new Engineer(data.name, data.id, data.email, data.github);
            teamCards.push(engineerCard);
        buildTeam();
    })
};

const writeToFile = (file, data) => {
    fs.writeFile(file, data, (err) => 
    err ? console.error(err) : console.log("html created"));
}

const appendToFile = (fileName, data) => {
    fs.appendFile(fileName, data, (err) => 
    err ? console.error(err) : console.log("Committed"));
}

buildTeam();
