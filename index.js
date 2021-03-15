const inquirer = require("inquirer");
const fs = require("fs");

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
        },
    
    ])
}

// index of job title questions prompting additional question switch statement
