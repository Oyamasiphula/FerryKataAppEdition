function Car(color, people){
		this.color = color;
		this.people = people;
};

function Ferry(numberOfCarsAllowed,numberOfPeopleAllowed){
	
	var car_count = 0;
	var peopleCount = 0;
		this.numberOfCarsAllowed = numberOfCarsAllowed; 
		this.numberOfPeopleAllowed = numberOfPeopleAllowed;

  	this.board = function(){
  	// incremental method for the value of cars
    	car_count++;

	if (car_count <= this.numberOfCarsAllowed) {
		alert(car_count =+ car_count + " " +"Accepted");
			console.log("Boarding again")
				return "Accepted";   
	}
		peopleCount++
	 if (peopleCount <= this.numberOfPeopleAllowed) {
		alert(parseInt(peopleCount  =+ peopleCount) + " " +"Accepted" );
			console.log("Boarding again")
				return "Accepted";   
	}

	else if(car_count >= this.numberOfCarsAllowed){
		alert(" is Rejected"+ " " +"Accepted");
	    		return ("Rejected");
			}
	else if(peopleCount >= this.numberOfPeopleAllowed){
		alert(" is Rejected");
	    		return ("Rejected");
			}
 
	
	  	};
	}

module.exports.Car = Car;
