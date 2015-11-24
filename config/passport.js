'use strict';

var passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	config = require('./config');

module.exports = function () {
	passport.serializeUser(function (user, done) {
		console.log('Serializing...');
		done(null, user);
	});

	passport.deserializeUser(function (user, done) {
		console.log('De-Serializing...');
		done(null, user);
	});

	passport.use(new FacebookStrategy(
		{
			clientID: config.fb_id,
			clientSecret: config.fb_secret,
			callbackURL: "http://localhost:3000/auth/facebook/callback",
			profileFields: ['id', 'emails', 'name']
		},
		function (accessToken, refreshToken, profile, done) {
			console.log('-------Profile-------');

			console.log(profile);
			done(null, {});
		}
		));
}