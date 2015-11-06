QUnit.test("testing class function Cars", function(assert) {
    assert.equal(typeof Cars, "function");
    assert.equal(typeof(BMW.passenger_No), "number");
    assert.equal(typeof(BMW.color), "string");
    assert.equal(BMW.color, "Green");
});

QUnit.test("testing class Car properties", function(assert) {  
	assert.equal(BMW.passenger_No, 5);
    assert.equal(BMW.color, "Green");

    assert.equal(Mazda.passenger_No, 8);
    assert.equal(Mazda.color, "White");

    assert.equal(VW.passenger_No, 4);
    assert.equal(VW.color, "Blue");

    assert.equal(Ford.passenger_No, 6);
    assert.equal(Ford.color, "Red");

    assert.equal(Nissan.passenger_No, 10);
    assert.equal(Nissan.color, "Green");

});

QUnit.test("testing class function Ferry", function(assert) {
    assert.equal(typeof Ferry, "function");
});
