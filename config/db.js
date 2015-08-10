var mongoose = require('mongoose');

// Config Vars
// =============================================================================
var uriString = 'mongodb://localhost/default';


// Connection with minor error handling
mongoose.connect(uriString, function(err, res){
	if(err){
		console.log('Connection[ERROR]: ' + uriString + '---' + err);
	} else {
		console.log('Connection[Success]: ' + uriString);
	}
});