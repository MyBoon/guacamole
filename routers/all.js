'use strict';

var express = require('express'),
router = express.Router();

/* Public Pages */
var frontController = require('../controllers/front.js');

module.exports = function (app) {

  app.get('*', function(req, res, next) {
    if (req.headers.host.match(/^www/) == null ) res.redirect(301, 'http://www.' + req.headers.host + req.url);
    else next();
  });

  /* Public Pages */
  app.route('/').get(frontController.renderHome);
  app.route('/about').get(frontController.renderAbout);
};
