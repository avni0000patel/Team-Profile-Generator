const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const Generator = require("./src/generator.js");
const generateHTML = require("./src/generateHTML.js");
let page = "";

// Manager question prompts
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's employee id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
        },
    ])
        .then(function ({ name, id, email, officeNumber }) {
            const manager = new Manager(name, id, email, officeNumber);
            console.log(manager);
            const generator = new Generator();
            page = page + `${generator.managerGenerator(manager)}`;
            menu();
        });
};

// Add engineer or intern to the team menu
const menu = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Select an employee or quit.",
            name: "menu",
            choices: ["Engineer", "Intern", "Quit"]
        }
    ])
        .then((data) => {
            if (data.menu === "Engineer") {
                engineerQuestions();
            } else if (data.menu === "Intern") {
                internQuestions();
            } else {
                init();
            }

        })
}

// Engineer question promts
const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's employee id?",
        },
        {
            type: 'input',
            name: "email",
            message: "What is the engineer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github?",
        }
    ])
        .then(function ({ name, id, email, github }) {
            const engineer = new Engineer(name, id, email, github);
            console.log(engineer);
            const generator = new Generator();
            page = page + `${generator.engineerGenerator(engineer)}`;
            menu();
        });
}

// Intern question prompts
const internQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's employee id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
        },
    ])
        .then(function ({ name, id, email, school }) {
            const intern = new Intern(name, id, email, school);
            console.log(intern);
            const generator = new Generator();
            page = page + `${generator.internGenerator(intern)}`;
            menu();
        });
}

const init = () => {
    const setup = new generateHTML;
    const generatePage = setup.template(page);
    fs.writeFile("./dist/index.html", generatePage, (err) =>
        err ? console.log(err) : console.log('Successfully wrote to index.html'));
}

managerQuestions();