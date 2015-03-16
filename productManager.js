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

exports.returnsLeastSellingCat = function(productsSoldMap){

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

exports.returnsLeastSellingCat = function(productsSoldMap){

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