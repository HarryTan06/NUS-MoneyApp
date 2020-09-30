var express = require('express'); //import 
var router = express.Router(); 
var mystr = "I am sending this DATA from backend to Frontend"; 
// GET my page. 
router.get('/', function(req, res, next) {
    res.send(mystr);
    });

   module.exports = router  


/*
     var express = require('express'); //import 
     // import connection from mysql.js for sql database connection
     const connection = require("./mysql");

// define router object
router = express.Router();

// API to display accounts  of a user after validating his password

         router.get("/",(request, response) => {
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

                  module.exports = router; */