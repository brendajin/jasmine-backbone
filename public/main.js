var paths = {
	backbone: 'lib/backbone',
    jquery:'lib/jquery-1.9.1.min',
	underscore: 'lib/underscore-min',
	handlebars: 'lib/handlebars.runtime'
}

var shim = {
	handlebars: {
		exports: 'Handlebars'
	},
	Backbone: {
		deps: ['underscore', 'jquery'],
		exports: 'Backbone'
	},
	underscore: {
		exports: '_'
	}
}

// set up require.js 
require.config({
    baseUrl: '.',
    paths: paths,
    shim: shim
});