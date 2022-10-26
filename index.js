const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHtml = require("./src/htmltemplate");
const createdEmployees = [];

const start = function () {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is your team managers name?",
      },
      {
        name: "id",
        type: "number",
        message: "What is your team managers id?",
      },
      {
        name: "email",
        type: "input",
        message: "What is your team managers email address?",
      },
      {
        name: "number",
        type: "number",
        message: "What is your team managers office number?",
      },
    ])
    .then((response) => {
      console.log(response);
      const newManager = new Manager(
        response.name,
        response.id,
        response.email,
        response.number
      );
      createdEmployees.push(newManager);
      askedNext();
    });
};
const askedNext = function () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Select an engineer, intern, or generate team.",
        choices: ["engineer", "intern", "generate team"],
      },
    ])
    .then((answers) => {
      if (answers.choice === "engineer") {
        createEngineer();
      } else if (answers.choice === "intern") {
        createIntern();
      } else {
        createHtml();
      }
    });
};
const createEngineer = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your team engineers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your team engineers id?",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your team engineers email address.",
      },
      {
        type: "input",
        name: "github",
        message: "What is your team engineers github name?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      createdEmployees.push(engineer);
      askedNext();
    });
};

const createIntern = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your interns name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your interns id?",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your interns email address.",
      },
      {
        type: "input",
        name: "school",
        message: "What is your interns school?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      createdEmployees.push(intern);
      askedNext();
    });
};

function createHtml() {
  fs.writeFile("./dist/index.html", generateHtml(createdEmployees), (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

start();
