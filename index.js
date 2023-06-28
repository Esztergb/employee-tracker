// Give the user a pleasant welcome message.
console.log("***********************************");
console.log("*                                 *");
console.log("*        EMPLOYEE MANAGER         *");
console.log("*                                 *");
console.log("***********************************");
console.log("")

const inquirer = require('inquirer');
const mysql = require('mysql2');
const prompts = require ('./utils/prompts');
const connection = require('./config/connection');
// const consoleTable = require("console.table");

 