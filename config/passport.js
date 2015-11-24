'use strict';

var passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	TwitterStrategy = require('passport-twitter').Strategy,
	GitHubStrategy = require('passport-github2').Strategy,
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
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
			clientID: config.auth.facebook.key,
			clientSecret: config.auth.facebook.secret,
			callbackURL: "http://localhost:3000/auth/facebook/callback",
			profileFields: ['id', 'emails', 'name', 'picture.type(large)']
		},
		function (accessToken, refreshToken, profile, done) {
			console.log('-------FB Profile-------');
			console.log(profile);
			done(null, {});
		}
		));

	passport.use(new TwitterStrategy(
		{
			consumerKey: config.auth.twitter.key,
			consumerSecret: config.auth.twitter.secret,
			callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
		},
		function (token, tokenSecret, profile, done) {
			console.log('-------Twitter Profile-------');
			console.log(profile);
			done(null, {});
		}
		));

	passport.use(new GitHubStrategy(
		{
			clientID: config.auth.github.key,
			clientSecret: config.auth.github.secret,
			callbackURL: "http://127.0.0.1:3000/auth/github/callback"
		},
		function (accessToken, refreshToken, profile, done) {
			console.log('-------Github Profile-------');
			console.log(profile);
			done(null, {});
		}
		));

	passport.use(new GoogleStrategy(
		{
			clientID: config.auth.google.key,
			clientSecret: config.auth.google.secret,
			callbackURL: "http://127.0.0.1:3000/auth/google/callback"
		},
		function (token, tokenSecret, profile, done) {
			console.log('-------Google Profile-------');
			console.log(profile);
			done(null, {});
		}
		));
}