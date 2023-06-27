const inquirer = require('inquirer'); // import inquirer
const mysql = require ('mysql2');
const consolTable = require ('consol.table');
function init() {

}

function mainMenu() {
    inquirer.createPromptModule({
      type: "list",
      name: "mainMenu",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Departments",
        "View All Roles",
        "Add Employee",
        "Add Department",
        "Add Role",
        "Update Employee Role",
        "Exit",
      ],
    })

    
}


