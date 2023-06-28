// //connect to database
// const mysql = require("mysql2");
// const mainMenu = require ("../index")
// require("dotenv").config();

// const db = mysql.createConnection(
//   {
//     host: "localhost",
//     user: "root",
//     password: process.env.DB_PASSWORD,
//     database: "employees_db",
//   },
//   console.log(`Connected to the employees_db database.`)
// );

// //Welcome message and start main Menu
// db.connect(function (err) {
//   if (err) throw err;
//   console.log("***********************************");
//   console.log("*                                 *");
//   console.log("*        EMPLOYEE MANAGER         *");
//   console.log("*                                 *");
//   console.log("***********************************");
//   console.log("");
//   mainMenu();
// });

// module.export = db;