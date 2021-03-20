const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
let cards = [];
let employeeCard = [];
let teamCard = [];

const questions = () => {
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
            type: "list",
            name: "jobtitle",
            message: "What is the Employees Job Title?",
            choices: ["Manager", "Intern", "Engineer"],
        },
    ])
    .then((answer) => {
        if (answer.jobtitle === "Manager") {
            managerQ();
        } else if (answer.jobtitle === "Intern") {
            internQ();
        } else if (answer.jobtitle === "Engineer") {
            engineerQ();
        } else {
            console.log("Need to have a job title");
        }
    })
}

const managerQ = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number?",
        }
    .then((data) => {
    const managerCard = new Manager(data.givenName, data.id, data.email, data.officeNumber);
        teamCard.push(managerCard);
        cardOptions();
    })
])};

const internQ = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "school",
            message: "What school do they attend?",
        }
        .then((data) => {
        const internCard = new Intern(data.givenName, data.id, data.email, data.school);
        teamCard.push(internCard);
        cardOptions();
    })
])};

const engineerQ = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "gitHub",
            message: "What is there GitHub username?",
        }
        .then((data) => {
            const engineerCard = new Engineer(data.givenName, data.id, data.email, data.github);
                team.push(engineerCard);
                cardOptions();
            })
])};


const initialHTML = () => {
`<!DOCTYPE html>
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
`
}

const cardOptions = (teamCard) => {
    for (let i=0; i < teamCard.length; i++){
        if(data[i].getRole() === "Manager"){
            employeeCard[i] = 
            `<div class="col">
            <div class="card-body" style="width: 18rem;">
                <div class="card-header text-white bg-primary" style="width: 18rem;" >
                    <h5 class="card-title">${teamCard[i].getName()}</h5>
                    <h6 class="card-subtitle text-white">${teamCard[i].getRole()}</h6>
                </div>
                <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamCard[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamCard[i].getEmail()}">${teamCard[i].getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${teamCard[i].officeNumber}</li>
                </ul>
                <div></div>
            </div>
        </div>`
        } else if(teamCard[i].getRole() === "Intern") {
            employeeCard[i] = 
            `<div class="col">
            <div class="card-body" style="width: 18rem;">
                <div class="card-header text-white bg-primary" style="width: 18rem;" >
                    <h5 class="card-title">${teamCard[i].getName()}</h5>
                    <h6 class="card-subtitle text-white">${teamCard[i].getRole()}</h6>
                </div>
                <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamCard[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamCard[i].getEmail()}">${teamCard[i].getEmail()}</a></li>
                    <li class="list-group-item">School: ${teamCard[i].school}</li>
                </ul>
                <div></div>
            </div>
        </div>`
        } else if (teamCard[i].getRole() === "Engineer") {
            `<div class="col">
            <div class="card-body" style="width: 18rem;">
                <div class="card-header text-white bg-primary" style="width: 18rem;" >
                    <h5 class="card-title">${teamCard[i].getName()}</h5>
                    <h6 class="card-subtitle text-white">${teamCard[i].getRole()}</h6>
                </div>
                <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamCard[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamCard[i].getEmail()}">${teamCard[i].getEmail()}</a></li>
                    <li class="list-group-item">GitHub: ${teamCard[i].github}</li>
                </ul>
                <div></div>
            </div>
        </div>`
        }
        cards.push(employeeCard[i]);
    }
}

function empCardHTML () {
    cardOptions();
    for(let i=0;i<employeeCard.length; i++){
        fs.appendFile("./index.html", employeeCard.length[i].toString());
    }
}

// function appendingFile (fileName, data) {
//     fs.appendFile(fileName, data, (err) => 
//     err ? console.err(err) : console.log('it worked'));
//     empCardHTML();
// }

function writeHTML() {
    questions()
    .then((answers) => fs.writeFile('index.html', initialHTML(answers)))
    .then((answers) => fs.appendFile('index.html', empCardHTML(answers)))
   
}

writeHTML();