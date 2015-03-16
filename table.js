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
	console.log(productsSoldMap);
  console.log(productManager.returnsMostSellingCat(categoryMap));
		//console.log(productsSoldMap);
    	//console.log(productManager.returnsMostSellingProd(productsSoldMap));
 		//console.log(productManager.returnsLeastSellingProd(productsSoldMap));
});


//read from file
fileStream.pipe(csvConverter);

