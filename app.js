var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var fs = require('fs');
//
var passport = require('./auth');

var totalSales = require('./public/totalSold');
var categories = require('./public/categories.json');
var tableJs = require('./public/spazaData.json');
var name = require('./public/regularSales.json');
var mostSellingCategory = require('./public/mostSellingCategory.json');
//var mostRegularSales = ;

var mysql = require('mysql'),
    bodyParser = require('body-parser'),
    products = require('./routes/products'),
    orders = require('./routes/orders');

var myConnection = require('express-myconnection');

var dbOptions = {
      host: 'localhost',
      user: 'root',
      password: 'spot',
      port: 3306,
      database: 'spaza'
};






app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.use(express.static('views'));
app.use(express.static('public'));



//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 
// *****Import files into db******
// LOAD DATA LOCAL INFILE '/Users/Mysterion/codex/spaza-pair/Spaza/public/Sales.csv'
//INTO TABLE spaza.purchase_table
//FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r';

// 
// 
// 

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/products',products.show);

app.get('/orders',orders.show);

app.get('/suppliers', products.suppliers);
app.get('/productsAndCategories',products.productsAndCategories);
app.get('/mostSold',products.mostSold);
app.get('/leastSold',products.leastSold);
//
app.get('/productsGraph', function(req, res) {
    res.render('productsGraph', {layout: false});
});
//

app.get('/data', function(req, res) {
    res.render('data');
});

app.get('/calendar', function(req, res) {
    res.render('calendar');
});

app.get('/chart', function(req, res) {
    res.render('chart');
});

app.get('/file-manager', function(req, res) {
    res.render('file-manager');
});

app.get('/form', function(req, res) {
    res.render('form');
});



app.get('/icon', function(req, res) {
    res.render('icon');
});

app.get('/infrastructure', function(req, res) {
    res.render('infrastructure');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/messages', function(req, res) {
    res.render('messages');
});

app.get('/table', function(req, res) {
    res.render('table');
});

app.get('/tasks', function(req, res) {
    res.render('tasks');
});

app.get('/typography', function(req, res) {
    res.render('typography');
});
app.get('/ui', function(req, res) {
    res.render('ui');
});
app.get('/widgets', function(req, res) {
    res.render('widgets');
});

app.get('/*', function(req, res) {
    res.render('index');
});
app.get('/*', function(req, res) {
    res.render('error', {layout: false});
});



app.listen(3000);
console.log('doing my thing at http://localhost:3000');
























































