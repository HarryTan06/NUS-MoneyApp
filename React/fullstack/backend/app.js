var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require("cors"); //add this line1

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mypageRouter=require('./routes/mypage'); //Add this line 2
// var yourRouter=require('./routes/mypage2'); //Add this line for new page

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors()); //Add This Line3
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mypage',mypageRouter); //add this line4
 // app.use('/mypage2',yourRouter); //add this for mypage2

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
