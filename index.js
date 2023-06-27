// Give the user a pleasant welcome message.
console.log("\n------------ EMPLOYEE TRACKER ------------\n");

//to do
//1.) qreate prompts with inquirer to present options to user:
    //- View all departments
    //- View all roles
    //- View all employees
    //- Add a department
    //- Add a role
    //- Add an employee
    //- Update an employee role

//2.) Create events to handle used choices
    // View all departments => formated table showin dep.names and dep ID's
    // View all roles => formated table job title, role id, the department that role belongs to, and the salary for that role
    // View all employees => formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    // Add a department => prompted to enter the name of the department and that department is added to the database
    // Add a role => prompted to enter the name, salary, and department for the role and that role is added to the database
    // Add an employee => prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    // Update an employee role => prompted to select an employee to update and their new role and this information is updated in the database 

    const inquirer = require('inquirer');
    const prompts = require ('./prompts and handling/prompts');
    const mysql = require("mysql2");
    const connection = require('./config/connection')
   

    