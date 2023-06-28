//dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const cTable = require("console.table");

//connect to database
require("dotenv").config();

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: process.env.DB_USER,
    //MySQL password here
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
  //   console.log(`Connected to the employees_db database.`)
);


//wWelcome message and start main Menu
db.connect(function (err) {
  if (err) throw err;
  console.log("***********************************");
  console.log("*                                 *");
  console.log("*        EMPLOYEE MANAGER         *");
  console.log("*                                 *");
  console.log("***********************************");
  console.log("");
  mainMenu();
});







const connection = require('./config/connection');
require('dotenv').config();

 const init = function () {
   inquirer
     .prompt({
       type: "list",
       name: "menu",
       message: "What would you like to do?",
       choices: [
         "View All Employees",
         "View All Departments",
         "View All Roles",
         "Add Employee",
         "Add Department",
         "Add Role",
         "Remove Employee",
         "Update Employee Role",
         "Exit",
       ],
     })
     .then(function (answer) {
       switch (answer.menu) {
         case "View All Employees":
           viewEmployees()
           .then ((queryResults)=>{ 
            console.table(queryResults)
            init()
            })
           break;

         case "View All Departments":
           viewDepartments()
           .then((queryResults) => {
             console.table(queryResults);
             init();
           });
           break;

         case "View All Roles":
           viewRoles()
           .then((queryResults) => {
             console.table(queryResults);
             init();
           });
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




