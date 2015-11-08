QUnit.test("testing class function Car", function(assert) {
    assert.equal(typeof Car, "function");
    assert.equal(typeof(BMW.people), "number");
    assert.equal(typeof(BMW.color), "string");
    assert.equal(BMW.color, "Green");
});

QUnit.test("testing class Car properties", function(assert) {  
	assert.equal(BMW.people, 5);
    assert.equal(BMW.color, "Green");

    assert.equal(Mazda.people, 8);
    assert.equal(Mazda.color, "White");

    assert.equal(VW.people, 4);
    assert.equal(VW.color, "Blue");

    assert.equal(Ford.people, 6);
    assert.equal(Ford.color, "Red");

    assert.equal(Nissan.people, 10);
    assert.equal(Nissan.color, "Green");

});

QUnit.test("testing class function Ferry", function(assert) {
    assert.equal(typeof Ferry, "function");
});
