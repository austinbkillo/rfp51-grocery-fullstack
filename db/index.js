const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "student",
  password: "student",
  database: "groceryList",
});

connection.connect();

module.exports = connection;
