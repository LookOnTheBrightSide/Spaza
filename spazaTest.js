QUnit.test("testing mostSold function", function(assert){
    var objToTest = {'apples':1,'bananas':3,'grapes':8};
   // var value = soldMost(objToTest);
    // is the result as we expected?
    var result1 = returnsMostSellingProd(objToTest);
    assert.deepEqual(result1, { name : 'grapes', qty : 8});
    
});

QUnit.test("testing leastSold function", function(assert){
    var objToTest = {'apples':1,'bananas':3,'grapes':8};
   // var value = soldMost(objToTest);
    // is the result as we expected?
    var result2 = returnsLeastSellingProd(objToTest);
    assert.deepEqual(result2, {name : 'apples', qty : 1});
});
