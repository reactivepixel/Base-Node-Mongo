module.exports = function(app){

	// Index / Dashboard
	// ==============================================================================
	app.get('/', function (req, res) {
	    res.render('dashboard', {
	    	dynamicTitle: "Somewhat more dynamicTitle"
	    });
	});

	// Detail Page
	// ==============================================================================
	app.get('/detail/:title/:id', function (req, res) {
	    res.render('detail', {
	    	dynamicTitle: req.params.title,
	    	id: req.params.id
	    });
	});

}