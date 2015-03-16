//Converter Class
var Converter=require("csvtojson").core.Converter;
var fs=require("fs");

var productManager = require("./productManager.js");

var csvFileName="./Sales.csv";
var fileStream=fs.createReadStream(csvFileName);
//new converter instance
var csvConverter =new Converter({constructResult:true});

var fruit ={};
var	bathroom ={};
var	drinks={};
var	giftItems={};
var	stapleFoods={};
var categories = [fruit,bathroom,drinks,giftItems,stapleFoods];
var test = [];

//end_parsed will be emitted once parsing finished
csvConverter.on("end_parsed",function(products){
   //console.log(products); //here is your result json object
  	var productsSoldMap = {};
	products.forEach(function(product){
    	var productName = product["stock item"];
		if(!productsSoldMap[productName]){
			productsSoldMap[productName] = 0;
      	}
    	productsSoldMap[productName] = productsSoldMap[productName] + product["No sold"];
    	var prod = productsSoldMap[productName];
    	if (prod === "Creme Soda 500ml" || prod === "Coke 500ml" || prod === "Fanta 500ml" ) {
    		test = test.push(prod);
    	};
            console.log(prod);
	});

	console.log(test);
	console.log(productsSoldMap);

		//console.log(productsSoldMap);
    	//console.log(productManager.returnsMostSellingProd(productsSoldMap));
 		//console.log(productManager.returnsLeastSellingProd(productsSoldMap));
});

//read from file
fileStream.pipe(csvConverter);

