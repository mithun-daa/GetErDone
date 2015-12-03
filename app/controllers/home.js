var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/login');
  } else {
    res.render('index', {
      title: 'Get Er Done!',
      user: {
        id: req.user._id,
        name: req.user.name,
        photoUrl: req.user.photoUrl
      }
    });
  }
});
