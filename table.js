//Converter Class
var Converter=require("csvtojson").core.Converter;
var fs=require("fs");

var productManager = require("./productManager.js");

var csvFileName="./Sales.csv";
var fileStream=fs.createReadStream(csvFileName);
//new converter instance
var csvConverter =new Converter({constructResult:true});
var categoryMapping = {
  
    'Milk 1l': 'stapleFoods',
    'Imasi' : 'stapleFoods',
    'Bread' : 'stapleFoods',
    'Chakalaka Can': 'nonPerishables',
    'Gold Dish Vegetable Curry Can': 'nonPerishables',
    'Fanta 500ml': 'drinks',
    'Coke 500ml': 'drinks',
    'Cream Soda 500ml': 'drinks',
    'Iwisa Pap 5kg': 'stapleFoods',
    'Top Class Soy Mince': 'nonPerishables',
    'Shampoo 1 litre': 'bathroom',
    'Soap Bar': 'bathroom',
    'Bananas - loose': 'fruit',
    'Apples - loose': 'fruit',
    'Mixed Sweets 5s': 'giftItems',
    'Heart Chocolates': 'giftItems',
    'Rose (plastic)': 'giftItems',
    'Valentine Cards': 'giftItems'
};

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

	});
  
  var categoryMap={};
  products.forEach(function(product){

    
      var qty = product["No sold"];
      var categoryName = categoryMapping[product["stock item"]];
      if(!categoryMap[categoryName]){
        categoryMap[categoryName] = 0;
      }
     
      categoryMap[categoryName] = categoryMap[categoryName] +qty;
    
  });
  console.log(categoryMap);
	console.log("\nAll the categories:\n " + JSON.stringify(categoryMap));
	console.log("\nAll products and their sales totals :\n " + JSON.stringify(productsSoldMap));
  console.log("\nMost selling category : \n" + JSON.stringify(productManager.returnsMostSellingCat(categoryMap)));
   console.log("\nLeast selling category : \n" + JSON.stringify(productManager.returnsLeastSellingCat(categoryMap)));
		//console.log(productsSoldMap);
  console.log("\nMost sold product :\n " + JSON.stringify(productManager.returnsMostSellingProd(productsSoldMap)));
 	console.log("\nLeast sold product : \n" +JSON.stringify(productManager.returnsLeastSellingProd(productsSoldMap)));
});


//read from file
fileStream.pipe(csvConverter);

