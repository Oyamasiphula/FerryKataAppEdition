exports.Car = function(color, people){
        this.color = color;
        this.people = people;
};

exports.Ferry = function(numberOfCarsAllowed,numberOfPeopleAllowed){
        
        var car_count = 0;
        var peopleCount = 0;
            this.numberOfCarsAllowed = numberOfCarsAllowed; 
            this.numberOfPeopleAllowed = numberOfPeopleAllowed;
            this.board = function(){

                // incremental method for the value of cars
                    car_count++
                if (car_count <= this.numberOfCarsAllowed) {
                        alert(car_count =+ car_count);
                            console.log("Boarding again")
                                return "Accepted";   
                }; 
                if(car_count > this.numberOfCarsAllowed){
                    alert(" is Rejected");
                            return ("Rejected");
                        };

                  peopleCount++
                 if (peopleCount <= this.numberOfPeopleAllowed) {
                        alert(peopleCount  =+ peopleCount );
                            console.log("Boarding again")
                                return "Accepted";   
                };
                if(peopleCount > this.numberOfPeopleAllowed){
                    alert(" is Rejected");
                            return ("Rejected");
                        };
             
                
            };
};
