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
		alert(car_count =+ car_count);
			console.log("Boarding again")
				return "Accepted";   
	}
	else if(car_count >= this.numberOfCarsAllowed){
		alert(" is Rejected");
	    		return ("Rejected");
			}
			
	 if (car_count <= this.numberOfPeopleAllowed) {
		alert(car_count =+ car_count);
			console.log("Boarding again")
				return "Accepted";   
	}
	else if(car_count >= this.numberOfPeopleAllowed){
		alert(" is Rejected");
	    		return ("Rejected");
			}
 
	
	  	};
	}
