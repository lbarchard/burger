var mysql       = require("mysql");
var secureInfo  = require("./secureInfo.js");

var BurgersDB = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: secureInfo.password,
  database: "burgers_db"
});

var dbConnection = BurgersDB.connect(function(err) {
  if (err) throw err;
});
exports.dbConnection = dbConnection;
