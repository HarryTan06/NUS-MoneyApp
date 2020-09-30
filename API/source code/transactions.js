const express = require("express");

// import connection from mysql.js for sql database connection
const connection = require("./mysql");

// define router object
router = express.Router();



/* API to display accounts  of a user after validating his password*/

          router.get("/transactions/type",(request, response) => {
         // Validate the client input
             
            

            Connection.query(
                 `select transactions.type,  count(transactions.type) FROM nusmoney_db.transactions 
                 group by transactions.type 
                 order by count(transactions.type) desc; `,
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