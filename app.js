var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var hb = hbs.create({
    layoutsDir:__dirname + '/views/layouts/',
    extname:'hbs'
});
app.engine('hbs', hb.engine);
app.set('view engine', 'hbs');
app.set('views', './views');


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
