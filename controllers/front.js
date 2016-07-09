'use strict';

module.exports.renderHome = function(req, res) {
  res.render('home', {
    route: '/',
    og: {
      title: 'Guacamole | Home',
      description: 'A great starting point for writing web-apps using an Express-powered node.js server.',
      image: 'http://mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg',
    }
  });
};

module.exports.renderAbout = function(req, res) {
  res.render('about', {
    route: '/about',
    og: {
      title: 'Guacamole | About',
      description: 'A great starting point for writing web-apps using an Express-powered node.js server.',
      image: 'http://mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg',
    }
  });
};
