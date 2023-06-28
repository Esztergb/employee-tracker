const mysql = require("mysql2");
require("dotenv").config();
const consolTable = require("console.table");
const inquirer = require("inquirer");


function viewEmployees() {
  const sql = `SELECT *  FROM employee`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(result);

    init();
  });
}

module.export = {
  viewEmployees,
};