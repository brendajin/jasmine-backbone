var express 		= require('express'),
app 				= express();

//function for heroku
process.env.PWD = process.cwd();


app.configure(function(){
	//public directory for static server
	app.use(express.static(__dirname + '/public'));
	//ignore favicon
	app.use(express.favicon(process.env.PWD + '/public/favicon.ico'));
});

var port = process.env.PORT || 2500;
app.listen(port, function() {
  console.log("LISTENING ON PORT: "+port);
});