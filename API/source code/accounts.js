const express = require("express");

// import connection from mysql.js for sql database connection
const connection = require("./mysql");

// define router object
router = express.Router();



/* API to display accounts  of a user after validating his password*/

          router.get("/account/uid",(request, response) => {
         // Validate the client input
             if (request.body.uid == null) {
                response.send("User ID is missing");
              }   
            

            Connection.query(
                 `select * from nusmoney_db.accounts  where user_id =  ${request.body.uid} `,
                 (error, results) => {
                  
                    if (error) {
                        console.log(error);
                        response.send( error);
                      } else {
                      
                        if(results.length==0){          //checking if authentication fail
                        response.send( "unidentified ID");
                        } else {
                          response.send(results);
                        }
                      
                     }
                    });
                  });

/* API to create new account for user*/

router.post("/account/create",(request, response) => {
  // Validate the client input
       if (request.body.aid == null) {
         response.send("account ID is missing");
       }  
       if (request.body.uid == null) {
        response.send("User ID is missing");
      }  
      if (request.body.type == null) {
        response.send("Type is missing");
      }  
      if (request.body.balance == null) {
        response.send("Balance is missing");
      } 
      if (request.body.limit == null) {
        response.send("Limit is missing");
      }   
      if (request.body.date == null) {
        response.send("date is missing");
      }   
      

     Connection.query(
          `INSERT INTO nusmoney_db.accounts VALUES
          ( ${request.body.aid},${request.body.uid},"${request.body.type}",${request.body.balance},
          ${request.body.limit},"${request.body.date}") `,
          (error, results) => {
           
             if (error) {
                 console.log(error);
                 response.send( error);
               } else {
               
                   response.send(results);
                 }
               
             });
           });


           /* API to delete accounts  */

          router.delete("/account/delete",(request, response) => {
            // Validate the client input
                if (request.body.aid == null) {
                   response.send("Account ID is missing");
                 }   
               
   
               Connection.query(
                    `delete from nusmoney_db.accounts  where account_id =  ${request.body.aid} `,
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