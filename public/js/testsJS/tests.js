QUnit.test("testing class function Car", function(assert) {

    var BMW = new Car("Green",5);

        assert.equal(typeof Car, "function");
        assert.equal(typeof(BMW.people), "number");
        assert.equal(typeof(BMW.color), "string");
});

    QUnit.test("testing class Car properties", function(assert) { 

    var BMW = new Car("Green",5);
    var Mazda = new Car("White",8);
    var VW = new Car("Blue",4);
    var Ford = new Car("Red",6);
    var Nissan = new Car("Green",10);

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

QUnit.test("testing Ferry class (function)", function(assert) {
var BMW = new Ferry(5,4)
        BMW.board()
        BMW.board()
        BMW.board()
        BMW.board()
        BMW.board()
        BMW.board()
        BMW.board()
      

var VW = new Ferry(3,2)
        VW.board()
        VW.board()
        VW.board()
        VW.board()
        VW.board()
        VW.board()
        VW.board()
       

        assert.equal(typeof Ferry, "function");
        assert.equal(BMW.numberOfCarsAllowed,5);
        assert.equal(BMW.numberOfPeopleAllowed,4);
        assert.equal(VW.numberOfCarsAllowed,3);
        assert.equal(VW.numberOfPeopleAllowed,2);
});
