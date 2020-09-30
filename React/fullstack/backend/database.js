const mysql = require("mysql");


let properties = {
host: "localhost",
user: "root",
password: "Trader$06",
 database: "nusmoney_db",
//database: "test_db",
multipleStatements: true,
};

Connection = mysql.createConnection(properties);

Connection.connect((success) => {
    console.log("success connection");
 });

 /* displaying data for users who are age 74 */
let age=74;
Connection.query(
    `select * from user  where age =  ${age}`,
    (err, results) => {
      if (err) {
    console.log("error occured");
    console.log(err);}
    else{
    console.log(results);
    }
});

    
  // });
 /* inserting new data into user table  */ 
 let uid= 1030;
let uname = "Try insert";
let uemail = "insert@email.com";
let umsg = "insert msg";
let uic = 7999999;
let umobile = 3999999999;
let uage = 39;
let ugender = "M";

Connection.query(
    `
    insert into nusmoney_db.user (user_ID,name,email,password,ic_number,mobile,age,gender)
    values ('${uid}','${uname}','${uemail}','${umsg}','${uic}','${umobile}','${uage}','${ugender}');
    `,
    (err, results) => {
if (err) {
    console.log("error occured");
    console.log(err);
}

    console.log(results);
  });
/* display the new data */
 
 let value= 1030;
 Connection.query(
    `select * from user  where user_id =  '${value}'`,
    (err, results) => {
if (err) {
    console.log("error occured");
    console.log(err);
}

    console.log(results);
  });
  /* delte the new data*/
  Connection.query(
    `delete from nusmoney_db.user where user.user_id =  ${value}`,
    (err, results) => {
if (err) {
    console.log("error occured");
    console.log(err);
}

    console.log(results);
  });
