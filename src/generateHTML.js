const fs = require('fs');
let cards = [];
let card = [];

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
    <div class="row">`
}

const cardOptionsHTML = (teamCards) => {
    for (let i=0; i < teamCards.length; i++){
        if(teamCards[i].getRole() === "Manager"){
            card[i] = 
            `<div class="col">
            <div class="card-body" style="width: 18rem;">
                <div class="card-header text-white bg-primary" style="width: 18rem;" >
                    <h5 class="card-title">${teamCards[i].getName()}</h5>
                    <h6 class="card-subtitle text-white">${teamCards[i].getRole()}</h6>
                </div>
                <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamCards[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamCards[i].getEmail()}">${teamCards[i].getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${teamCards[i].officeNumber}</li>
                </ul>
                </div>
            </div></div>` 
} else if(teamCards[i].getRole() === "Intern"){
        card[i] = 
            `<div class="col">
            <div class="card-body" style="width: 18rem;">
                <div class="card-header text-white bg-primary" style="width: 18rem;">
                    <h5 class="card-title">${teamCards[i].getName()}</h5>
                    <h6 class="card-subtitle text-white">${teamCards[i].getRole()}</h6>
                </div>
                <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamCards[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamCards[i].getEmail()}">${teamCards[i].getEmail()}</a></li>
                    <li class="list-group-item">School: ${teamCards[i].school}</li>
                </ul>
                </div>
        </div>`
    } else if (teamCards[i].getRole() === "Engineer"){
        card[i] =
            `<div class="col">
            <div class="card-body" style="width: 18rem;">
                <div class="card-header text-white bg-primary" style="width: 18rem;" >
                    <h5 class="card-title">${teamCards[i].getName()}</h5>
                    <h6 class="card-subtitle text-white">${teamCards[i].getRole()}</h6>
                </div>
                <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamCards[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamCards[i].getEmail()}">${teamCards[i].getEmail()}</a></li>
                    <li class="list-group-item">GitHub: ${teamCards[i].github}</li>
                </ul>
                </div>
            </div>`
        }
    cards.push(card[i]);
}}

const HTMLBuild = () => {
    for(let i=0; i<card.length; i++){
        appendToFile("./dist/index.html", card[i].toString());
    }
}

const appendToFile = (fileName, data) => {
    fs.appendFile(fileName, data, (err) => 
    err ? console.error(err) : console.log("Committed"));
}

const finalHTML = () => {
    appendToFile("./dist/index.html",
    `
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </div>
    </body>
    </html>`);
}

module.exports = {initialHTML, cardOptionsHTML, HTMLBuild, finalHTML};