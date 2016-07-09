/*
 * IMPORT MODULES
 */

var express = require('express');
var sitemap = require('express-sitemap');

var app = express();
require('./config/express')(app);

var map = sitemap({
  generate: app
});

app.get('/sitemap.xml', function(req, res) { // send XML map
  map.XMLtoWeb(res);
}).get('/robots.txt', function(req, res) { // send TXT map
  map.TXTtoWeb(res);
});

app.listen(process.env.PORT || 3000);
