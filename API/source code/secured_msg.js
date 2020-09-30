const express = require("express");

// import connection from mysql.js for sql database connection
const connection = require("./mysql");

// define router object
router = express.Router();



/* API to display user secured msgd*/

          router.get("/secured_msg/uid",(request, response) => {
         // Validate the client input
             if (request.body.uid == null) {
                response.send("User ID is missing");
              }   
            

            Connection.query(
                 `select * from nusmoney_db.secured_message  where user_id =  ${request.body.uid} `,
                 (error, results) => {
                  
                    if (error) {
                        console.log(error);
                        response.send( error);
                      } else {
                      
                        if(results.length==0){          //checking if authentication fail
                        response.send( "unidentified ID ");
                        } else {
                          response.send(results);
                        }
                      
                      }
                    });
                  });

module.exports = router;