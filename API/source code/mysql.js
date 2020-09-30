
const mysql = require("mysql");

parameters = {
    host: "localhost",
    user: "root",
    password: "Trader$06",
     database: "nusmoney_db",
    multipleStatements: true,
    };

    Connection = mysql.createConnection(parameters);

Connection.connect((error) => {
  if(error){
    console.log(error)
  }
  else {
    console.log("success connection");
  }
});

module.exports = Connection;  // for other file to use it
            