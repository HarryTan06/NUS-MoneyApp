const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./user");   //connect api to user.js router which contain the sql query
const accountsRouter  = require("./accounts");   //connect api to accounts.js router which contain the sql query
const transactionsRouter  = require("./transactions");   //connect api to transactions.js router which contain the sql query
 const securedRouter  = require("./secured_msg");   //connect api to secured_msg.js router which contain the sql query

app = express();
app.use(bodyParser.json());

app.use("/", userRouter);   //api call for user table query
 app.use("/", accountsRouter);   //api call for accounts table query
 app.use("/", transactionsRouter);   //api call for transactions table query
 app.use("/", securedRouter);   //api call for secured_msg  table query


app.listen(3000);

