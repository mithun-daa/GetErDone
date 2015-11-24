var express = require('express'),
  router = express.Router(),
  passport = require('passport');

module.exports = function (app) {
  
  app.use('/login', function (req, res) {
      
  });
  
  app.use('/auth', router);
};

router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}));
router.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
                                      
router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function (req, res) {
    console.log('Redirecting....');
    
    res.redirect('/');
  });
  
  
router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));
router.get('/github/callback',
  passport.authenticate('github', { successRedirect: '/',
                                      failureRedirect: '/login' }));
                                      
router.get('/google', passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));
router.get('/google/callback',
  passport.authenticate('google', { successRedirect: '/',
                                      failureRedirect: '/login' }));