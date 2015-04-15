var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
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
    products = require('./routes/products');

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
 
    res.render('index',{totalSales:totalSales});
});

app.get('/data', function(req, res) {
 
    res.render('data', {layout: false});
});
app.get('/regularSales', function(req, res) {
 
    res.render('regularSales',{regularSales:name});
});
app.get('/categories', function(req, res) {
    
    //var categories = yourModuleThatProcessTheData.getCategories();

    res.render('categories',{categories:categories});
});
app.get('/spazaData', function(req, res) {
    
    //var spazaData = yourModuleThatProcessTheData.getCategories();

    res.render('spazaData',{spazaData:tableJs});
});

app.get('/mostSellingCategory', function(req, res) {
    
    //var mostSellingCategory = yourModuleThatProcessTheData.getCategories();

    res.render('mostSellingCategory',{mostSellingCategory: mostSellingCategory});
});

app.get('/*', function(req, res) {
 
    res.render('error', {layout: false});
});







app.listen(3000);
console.log('doing my thing at http://localhost:3000');
























































