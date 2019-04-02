var express =require('express');
var bP = require('body-parser');
var mg = require('mongoose');
var movies = require('./routes/movies');
var app = express();

var dbName = 'ProjetWeb';
var connectionString = 'mongodb://localhost:27017/' + dbName;
mg.connect(connectionString, {useNewUrlParser:true});

app.use(bP.json());
app.use(bP.urlencoded());
app.use('/api', movies);

module.exports = app;
