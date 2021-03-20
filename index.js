const inquirer = require("inquirer");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);
let cards = [];
let employeeCard = [];

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
        },
])};

const internQ = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "school",
            message: "What school do they attend?",
        },
])};

const engineerQ = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "gitHub",
            message: "What is there GitHub username?",
        },
])};

function init() {
    questions()
}

init();

const initialHTML = (answers) => {
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

const cards = (team) => {
    for (let i=0; i < team.length; i++){
        if(team[i].getRole() === "Manager"){
            employeeCard[i] = 
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
            employeeCard[i] = 
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
        cards.push(employeeCard[i]);
    }
}
