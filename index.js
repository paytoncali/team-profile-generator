const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
let teamCards = [];

const questions = () => {
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
            // .then => managerCard()
        } else if (data.jobtitle === "Intern") {
            internQ();
        } else if (data.jobtitle === "Engineer") {
            engineerQ();
        } else if (data.jobtitle === "Build Team") {
            let cardHTML = generateHTML.cardOptionsHTML(teamCards);
            let beginHTML = generateHTML.initialHTML(teamCards);
            writeToFile("./index.html", generateHTML.initialHTML());
            generateHTML.HTMLBuild();
        } else {
            console.log("Need to have a job title");
        }
    })
}

const managerQ = () => {
    console.log("manager called");
    inquirer.prompt ([
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number?",
        }
    ])
    .then((data) => {
    const managerCard = new Manager(data.givenName, data.id, data.email, data.officeNumber);
        teamCards.push(managerCard);
        questions();
    })

};

const internQ = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "school",
            message: "What school do they attend?",
        }
    ])
        .then((data) => {
        const internCard = new Intern(data.givenName, data.id, data.email, data.school);
        teamCards.push(internCard);
        questions();
    })
};

const engineerQ = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "gitHub",
            message: "What is there GitHub username?",
        }
    ])
    .then((data) => {
        const engineerCard = new Engineer(data.givenName, data.id, data.email, data.github);
            teamCards.push(engineerCard);
        questions();
    })
};

const writeToFile = (file, data) => {
    fs.writeFile(file, data, (err) => 
    err ? console.error(err) : console.log("html created"));
}


questions();
