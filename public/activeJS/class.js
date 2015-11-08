function Car(color, people){
  this.color = color;
  // adding * 2 the value of passengers
  this.people = people;
};

var BMW = new Car("Green",5);
var Mazda = new Car("White",8);
var VW = new Car("Blue",4);
var Ford = new Car("Red",6);
var Nissan = new Car("Green",10);

function Ferry(noCars, noCarsAllowed){
  this.noCars = noCars;
  this.noCarsAllowed = noCarsAllowed;
};