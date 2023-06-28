//dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

//connect to database
// require("dotenv").config();

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);


//Welcome message and start main Menu
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

//Display main menu 
function mainMenu() {
   inquirer
     .prompt([
     {
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
       ]
     }
     ])
     .then((answer) => {
       switch (answer.menu) {
         case "View All Employees":
           viewEmployees()
           break;

         case "View All Departments":
           viewDepartments()
           break;

         case "View All Roles":
           viewRoles()
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
           console.log("See yoou next time!");
           db.end();
           break;
       }
     });
 };

 // View functions

 function viewEmployees() {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee manager on manager.id = employee.manager_id INNER JOIN role ON (role.id = employee.role_id) INNER JOIN department ON (department.id = role.department_id) ORDER BY employee.id;`
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(res);
        startingQuestion();
    });
};

 function viewDepartments() {
   const sql = `SELECT department.id, department.name AS Department FROM department;`
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(res);
        mainMenu();
    });
}; 

function viewRoles() {
    const sql = `SELECT role.id, role.title AS role, role.salary, department.name AS department FROM role INNER JOIN department ON (department.id = role.department_id);`;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(res);
        startingQuestion();
    });
};




