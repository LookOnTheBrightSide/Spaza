var pm = require("../productManager");

QUnit.test("testing mostSold function", function(assert){
    
    var objToTest = {'apples':1,'bananas':3,'grapes':8};
    // var value = soldMost(objToTest);
    // is the result as we expected?
    var result1 = pm.returnsMostSellingProd(objToTest);
    assert.deepEqual(result1, {name : 'grapes', qty : 8});
    
});

QUnit.test("testing leastSold function", function(assert){

    var objToTest = {'apples':1,'bananas': 3,'grapes': 8};
   // var value = soldMost(objToTest);
    // is the result as we expected?
    var result2 = pm.returnsLeastSellingProd(objToTest);
    assert.deepEqual(result2, {name : 'apples', qty : 1});
});




QUnit.test("testing most selling category function", function(assert){

    var objToTest = {"freshFruit":12,"freshFlowers":122,"team":202};
    var result3 = pm.returnsMostSellingCat(objToTest);
    assert.deepEqual(result3, {"name":"team" ,"qty": 202});
});

QUnit.test("testing least selling category function", function(assert){

var objToTest = {"freshFruit":12,"freshFlowers":122,"team":202};
    var result4 = pm.returnsLeastSellingCat(objToTest);
    assert.deepEqual(result4, {"name":"freshFruit","qty": 12});
    
});