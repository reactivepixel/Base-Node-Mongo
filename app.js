var express 		= require('express'),
		app 				= express(),
		exphbs  		= require('express-handlebars'),
		db 					= require('./config/db');

//
// Config Vars
// ====================================================================================
var port = process.env.PORT || 3000;


// View Engine
// ====================================================================================
app.engine('handlebars', exphbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');	



// Routes
// ====================================================================================
var master_routes = require('./routes/master')(app);

// Static File Handling
app.use(express.static(__dirname + '/public'));


// Start the Server
// ====================================================================================
var server = app.listen(port)

console.log("Server listening on Port " + port);