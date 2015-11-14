var assert = require('assert'),
 	Car = require('../activeJS/classEg').Car;
 	 
var BMW = new Car("Green",5);

describe('Testing Ferry Functions and method', function(){

	it('Should check if embeded code if its a function', function(done){
			var results = typeof Car;
					assert.equal("function",results);
						done()
	});
	it('Should check type of the functions class datatype', function(done){
			var resultsOne = typeof(BMW.people);
		        	assert.equal("number",resultsOne);
	         			done()
	});
	it('Should check type of the functions class datatype ', function(done){
			var resultsTwo = typeof(BMW.color);
			    	assert.equal("string",resultsTwo);
				 		done()
	});

});