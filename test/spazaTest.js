var pm = require("../productManager");

QUnit.test("testing mostSold function", function(assert){
    
    var objToTest = {'apples':1,'bananas':3,'grapes':8};
    // var value = soldMost(objToTest);
    // is the result as we expected?
    var result1 = pm.returnsMostSellingProd(objToTest);
    assert.deepEqual(result1, { name : 'grapes', qty : 8});
    
});

QUnit.test("testing leastSold function", function(assert){

    var objToTest = {'apples':1,'bananas':3,'grapes':8};
   // var value = soldMost(objToTest);
    // is the result as we expected?
    var result2 = pm.returnsLeastSellingProd(objToTest);
    assert.deepEqual(result2, {name : 'apples', qty : 1});
});




QUnit.test("testing most selling category function", function(assert){

    var objToTest = [{"freshFruit":{"apples":1,"bananas":3,"grapes":8}},{"freshFlowers":{"protea":11,"rose":23,"lilly":88}},{"team":{"pirates":112,"chiefs":30,"sundowns":60}}];
    var result3 = pm.returnsLeastSellingCat(objToTest);
    assert.deepEqual(result3, {categoryName : 'team', qty : 202});
});

QUnit.test("testing least selling category function", function(assert){

var objToTest = [{"freshFruit":{"apples":1,"bananas":3,"grapes":8}},{"freshFlowers":{"protea":11,"rose":23,"lilly":88}},{"team":{"pirates":112,"chiefs":30,"sundowns":60}}];
    var result4 = pm.returnsLeastSellingCat(objToTest);
    assert.deepEqual(result4, {categoryName : 'freshFruit', qty : 12});
});