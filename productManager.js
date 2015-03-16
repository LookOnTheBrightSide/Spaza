exports.returnsMostSellingProd = function(productsSoldMap){

	var mostSold = { name : "" ,
					 qty : 0};

	// ??
	for(var product in productsSoldMap){
    	if(productsSoldMap.hasOwnProperty(product)){
      		var qtySold = productsSoldMap[product];
	       	if(qtySold > mostSold.qty){
             	mostSold.qty = qtySold;
             	mostSold.name = product;
	        }         
		}
	}

  	return mostSold;	
}

exports.returnsLeastSellingProd = function(productsSoldMap){

	var leastSold = { name : "" ,
				qty : Number.POSITIVE_INFINITY};

	// ??
	for(var product in productsSoldMap){
    	if(productsSoldMap.hasOwnProperty(product)){
      		var qtySold = productsSoldMap[product];
	       	if( qtySold < leastSold.qty){
             	leastSold.qty = qtySold;
             	leastSold.name = product;
	        }         
		}
	}

  	return leastSold;	
}

exports.returnsMostSellingCat = function(categoryMap){

	var mostSellingCat = { name : "" ,
					 qty : 0};

	// ??
	for(category in categoryMap){
		 var qtySold = categoryMap[category.qty];
     	if(categoryMap.hasOwnProperty(category)){
       		qtySold = categoryMap[category.qty];
	        	if(qtySold > mostSellingCat.qty){
	       		
              	mostSellingCat.qty = qtySold;
              	mostSellingCat.name = product;
             	
	         }    
		 }
	}
  return mostSellingCat; 
  		
}
exports.returnsLeastSellingCat = function(productsSoldMap){

	var leastSellingCat = { name : "" ,
				qty : Number.POSITIVE_INFINITY};

	// ??
	for(var product in productsSoldMap){
    	if(productsSoldMap.hasOwnProperty(product)){
      		var qtySold = productsSoldMap[product];
	       	if( qtySold < leastSellingCat.qty){
             	leastSellingCat.qty = qtySold;
             	leastSellingCat.name = product;
	        }         
		}
	}

  	return leastSellingCat;	
}