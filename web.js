var express 		= require('express'),
http 				= require('http'),
app 				= express(),
server 				= http.createServer(app),
NodeApplication 	= [];

//function for heroku
process.env.PWD = process.cwd();


app.configure(function(){
	//public directory for static server
	app.use(express.static(__dirname + '/public'));
	//ignore favicon
	app.use(express.favicon(process.env.PWD + '/public/favicon.ico'));
});

// Index Page
app.get('/', function(req, res) {
	res.render('index');
});

var port = process.env.PORT || 2500;
app.listen(port, function() {
  console.log("LISTENING ON PORT: "+port);
});