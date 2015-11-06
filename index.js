'use strict';
var express = require('express'),
	exphbs = require('express-handlebars');

	// objects = require()

var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.get('/', function(req, res){
	res.render('QUnit')
}); 

var port = process.env.port || 2000 ;

app.listen(port, function(){
	console.log('listening on *:' + port + "/QUnit");
});
