const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: process.env.DB_USER,
    //MySQL password here
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employees_db database.`)
);
