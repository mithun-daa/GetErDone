var express = require('express'),
  router = express.Router(),
  passport = require('passport');

module.exports = function (app) {
  app.use('/auth', router);
};

router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}));
router.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));