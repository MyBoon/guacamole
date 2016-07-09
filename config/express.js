var express = require('express');
var glob = require('glob');
var favicon = require('express-favicon');

var bodyParser = require('body-parser');
var swig = require('swig');

module.exports = function(app) {
	app.engine('swig', swig.renderFile);
	app.set('views', 'views');
	app.set('view engine', 'swig');

	var env = process.env.NODE_ENV || 'development';
	app.locals.ENV = env;
	app.locals.ENV_DEVELOPMENT = env == 'development';

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

  console.log('starting up');

	app.use('/assets', express.static('assets'));
	app.use(favicon(__dirname + '/../assets/images/favicon.ico'));
	//app.use('/images', express.static('images'));

	var routers = glob.sync('routers/*.js');
	routers.forEach(function(router) {
		require('../' + router)(app);
	});

  console.log('listening at http://localhost:' + (process.env.PORT || 3000));
};
