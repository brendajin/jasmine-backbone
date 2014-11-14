var express 		= require('express'),
	app 			= express(),
	fs				= require('fs'), 
	archiver		= require('archiver'),
	exampleName 	= 'example.zip',
	output 			= fs.createWriteStream(exampleName),
	zip				= archiver('zip');

//function for heroku
process.env.PWD = process.cwd();

zip.pipe(output);

zip.bulk([
	{ expand: true, src: ['example/*'], cwd: 'public/', dest: '.' }
]);

zip.finalize();

app.get('/example', function( req, res ) {
	res.download( __dirname + '/' + exampleName );
});

app.configure( function () {
	//public directory for static server
	app.use(express.static(__dirname + '/public'));
	//ignore favicon
	app.use(express.favicon(process.env.PWD + '/public/favicon.ico'));
});

var port = process.env.PORT || 2500;
app.listen( port, function () {
  console.log("LISTENING ON PORT: "+port);
});