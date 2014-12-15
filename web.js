var express 		= require('express'),
	app 			= express(),
	fs				= require('fs');

//function for heroku
process.env.PWD = process.cwd();

app.get('/example', function( req, res ) {
	res.download( __dirname + '/' + exampleName );
});

app.configure( function () {
	//public directory for static server
	app.use(express.static(__dirname + '/public'));
});

var port = process.env.PORT || 2500;
app.listen( port, function () {
  console.log("LISTENING ON PORT: "+port);
});