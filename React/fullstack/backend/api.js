/*
const express= require("express");
const bodypaser = require("body-paser");
const nodemon = require("nodemon");

app=express();
app.get("/start", (request, response) => {
    response.send("history. you are connected to node.js");
});

app.listen(3000);
*/

/*const express = require("express");
const bodyParser = require("body-parser");

app = express();
 app.use(bodyparser.json());
app.get("/start", (request, response) => {
  response.send("Hi. You are connected to Node.js");
});

app.listen(3000);
*/
/*
const express = require("express");
const bodyParser = require("body-parser");

app = express();
 app.use(bodyParser.json());
app.get("/start:input", (request, response) => {
  x=request.params.input;
  squared= input*input;
  response.send(squared);
});*/
/*

/* get eg
const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.use(bodyParser.json());

app.get("/cubis/:x", (request, response) => {
  x = request.body.number;
  squared = x * x* x;
  response.send(String(squared));
});

app.listen(3000);

*/
/*post example*/
const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.use(bodyParser.json());

app.get("/cubic", (request, response) => {
  x = request.body.number;
  squared = x * x * x;
  response.send(String(squared));
});

app.post("/save", (request, response) => {
  console.log("Data received: ");
  console.log(request.body.id);
  console.log(request.body.name);
  console.log(request.body.email);

  response.send("OK "+request.body.name);
});

app.listen(3000);


