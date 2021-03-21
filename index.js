const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
let cards = [];
let team = [];
let cardEl = [];

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
            choices: ["Manager", "Intern", "Engineer"],
        },
    ])
    .then((data) => {
        console.log(data);
        if (data.jobtitle === "Manager") {
            managerQ();
        } else if (data.jobtitle === "Intern") {
            internQ();
        } else if (data.jobtitle === "Engineer") {
            engineerQ();
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
        team.push(managerCard);
        initialHTML();
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
        team.push(internCard);
        initialHTML();
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
            team.push(engineerCard);
            initialHTML();
    })
};


const initialHTML = () => {
    console.log("this works");
    return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body>
    <h1>My Team</h1>
    <style type="text/css">
        h1 {
            background-color: red;
            text-align: center;
            color: white;
            padding: 25px;
        }
    </style>
</body>
</html>
${cardOptions}`; 
}

const cardOptions = () => {
    console.log("hi");
    for (let i=0; i < team.length; i++){
        if(team[i].getRole() === "Manager"){
            cards[i] = 
            `<div class="col">
            <div class="card-body" style="width: 18rem;">
                <div class="card-header text-white bg-primary" style="width: 18rem;" >
                    <h5 class="card-title">${team[i].getName()}</h5>
                    <h6 class="card-subtitle text-white">${team[i].getRole()}</h6>
                </div>
                <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${team[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${team[i].officeNumber}</li>
                </ul>
                <div></div>
            </div>
        </div>`
        } else if(team[i].getRole() === "Intern") {
            cards[i] = 
            `<div class="col">
            <div class="card-body" style="width: 18rem;">
                <div class="card-header text-white bg-primary" style="width: 18rem;" >
                    <h5 class="card-title">${team[i].getName()}</h5>
                    <h6 class="card-subtitle text-white">${team[i].getRole()}</h6>
                </div>
                <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${team[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                    <li class="list-group-item">School: ${team[i].school}</li>
                </ul>
                <div></div>
            </div>
        </div>`
        } else if (team[i].getRole() === "Engineer") {
            `<div class="col">
            <div class="card-body" style="width: 18rem;">
                <div class="card-header text-white bg-primary" style="width: 18rem;" >
                    <h5 class="card-title">${team[i].getName()}</h5>
                    <h6 class="card-subtitle text-white">${team[i].getRole()}</h6>
                </div>
                <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${team[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                    <li class="list-group-item">GitHub: ${team[i].github}</li>
                </ul>
                <div></div>
            </div>
        </div>`
        }
        cardEl.push(cards[i]);
    }
}

// const init = () => {
//     initialHTML()
//     .then(() => fs.appendFile("index.html", cardOptions))
//     .then(() => console.log('index is ready'))
//     .catch((err) => console.err(err));
// }
// function empCardHTML() {
//     for(let i=0;i<cards.length; i++){
//         fs.appendFile("./dist/index.html", cards.length[i].toString());
//     }
// }


// function writeHTML() {
//     fs.writeFile(data, (err) =>
//     err? console.log(err) : console.log('it worked'));
//     initialHTML();
// }

questions();
// function init() {
//     fs.appendFile("index.html", initialHTML)

// }
// init();