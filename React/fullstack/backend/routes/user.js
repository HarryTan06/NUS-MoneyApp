const express = require("express");

// import connection from mysql.js for sql database connection
const connection = require("./mysql");

// define router object
router = express.Router();



/* API to display user information after validating his password*/

          router.get("/user/uid",(request, response) => {
         // Validate the client input
             if (request.body.uid == null) {
                response.send("User ID is missing");
              }   
            if (request.body.ukey == null) {
            response.send("Password is missing");
              }

            Connection.query(
                 `select * from nusmoney_db.user  where user_id =  ${request.body.uid} and password ="${request.body.ukey}"`,
                 (error, results) => {
                  
                    if (error) {
                        console.log(error);
                        response.send( error);
                      } else {
                      
                        if(results.length==0){          //checking if authentication fail
                        response.send( "unidentified ID or wrong password");
                        } else {
                          response.send(results);
                        }
                      
                      }
                    });
                  });

      /* API for user to upate email account*/

      router.put("/update/email",(request, response) => {
        // Validate the client input
            if (request.body.uid == null) {
               response.send("User ID is missing");
             }   
           if (request.body.ukey == null) {
           response.send("Password is missing");
             }
             if (request.body.email == null) {
              response.send("Email is missing");
                }  

           Connection.query(
                `update nusmoney_db.user set email="${request.body.email}"  where user_id =  ${request.body.uid} 
                and password ="${request.body.ukey}"`,
                (error, results) => {
                 
                   if (error) {
                       console.log(error);
                       response.send( error);
                     } else {
                     
                      
                        response.send(results);
                       }
                    
                   });
                 });

module.exports = router;