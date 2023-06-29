// const inquirer = require("inquirer");
// const mysql = require("mysql2");
// const db = require ("../index")

// // View functions

// function viewEmployees() {
//   const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee manager on manager.id = employee.manager_id INNER JOIN role ON (role.id = employee.role_id) INNER JOIN department ON (department.id = role.department_id) ORDER BY employee.id;`;
//   db.query(sql, (err, res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.table(res);
//     mainMenu();
//   });
// }

// function viewDepartments() {
//   const sql = `SELECT department.id, department.name AS Department FROM department;`;
//   db.query(sql, (err, res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.table(res);
//     mainMenu();
//   });
// }

// function viewRoles() {
//   const sql = `SELECT role.id, role.title AS role, role.salary, department.name AS department FROM role INNER JOIN department ON (department.id = role.department_id);`;
//   db.query(sql, (err, res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.table(res);
//     mainMenu();
//   });
// }

// module.exports = {viewDepartments, viewEmployees, viewRoles};
