const inquirer = require('inquirer'); // import inquirer
const mysql = require ('mysql2');




function init() {
    inquirer
      .prompt({
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
      .then(function (answer) {
        switch (answer.mainMenu) {
          case "View All Employees":
            viewEmployees();
            break;

          case "View All Departments":
            viewDepartments();
            break;

          case "View All Roles":
            viewRoles();
            break;

          case "Add Employee":
            addEmployee();
            break;

          case "Add Department":
            addDepartment();
            break;

          case "Add Role":
            addRole();
            break;

          case "Update Employee Role":
            updateRole();
            break;

          case "Exit":
            connection.end();
            break;
            default:
            break;    
        }
       
    }); 
  
}

init();



