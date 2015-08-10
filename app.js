var express 		= require('express'),
		app 				= express(),
		exphbs  		= require('express-handlebars');


// View Engine
// ====================================================================================
app.engine('handlebars', exphbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');		




app.get('/', function (req, res) {
    res.render('dashboard');
});

var port = process.env.PORT || 3000;

app.listen(port)

console.log("Active on Port " + port);