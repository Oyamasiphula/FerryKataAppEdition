function Cars(color, passenger_No){
    this.color = color;
    this.name = name;

    this.setPassenger = function(passenger_No)
    {
        return this.passenger_No;
    }

    this.setColor = function(color)
    {
        return this.color;
    }
}
 
function Ferry(noCars, noCarsAllowed){
  this.noCars = noCars;
  this.noCarsAllowed = noCarsAllowed;
};

var BMW = new Ferry(8,5);
var Mazda = new Ferry(5,8);
var VW = new Ferry(9,4);
var Ford = new Ferry(4,6);
var Nissan = new Ferry(3,10);