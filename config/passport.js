'use strict';

var passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	// TwitterStrategy = require('passport-twitter').Strategy,
	GitHubStrategy = require('passport-github2').Strategy,
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
	config = require('./config'),
	mongoose = require('mongoose'),
  	User = mongoose.model('User');

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
			profileFields: ['id', 'emails', 'displayName', 'picture.type(large)']
		},
		function (accessToken, refreshToken, profile, done) {
			var userEmail = profile.emails[0].value;
			User.findOne({email: userEmail}, function (err, user) {
				if(err) {
					console.log('Error while getting User');
					done(err);
				}
				if(!user) {
					console.log('User not found. Adding user to DB');
					var newUser = new User();
					newUser.name = profile.displayName;
					newUser.email = profile.emails[0].value;
					newUser.photoUrl = profile.photos[0].value;
					newUser.provider = 'Facebook';
					newUser.providerId = profile.id;
					
					newUser.save(function (err) {
						if(err) {
							console.log('Error while creating new user: ', err);
							done(err);
						}
						done(null, newUser);
					});
				} else {
					done(null, user);
				}
			});
		}
		));

	passport.use(new GitHubStrategy(
		{
			clientID: config.auth.github.key,
			clientSecret: config.auth.github.secret,
			callbackURL: "http://127.0.0.1:3000/auth/github/callback"
		},
		function (accessToken, refreshToken, profile, done) {
			var userEmail = profile.emails[0].value;
			User.findOne({email: userEmail}, function (err, user) {
				if(err) {
					console.log('Error while getting User');
					done(err);
				}
				if(!user) {
					console.log('User not found. Adding user to DB');
					var newUser = new User();
					newUser.name = profile.displayName;
					newUser.email = profile.emails[0].value;
					newUser.photoUrl = profile._json.avatar_url;
					newUser.provider = 'Github';
					newUser.providerId = profile.id;
					
					newUser.save(function (err) {
						if(err) {
							console.log('Error while creating new user: ', err);
							done(err);
						}
						done(null, newUser);
					});
				} else {
					done(null, user);
				}
			});
		}
		));

	passport.use(new GoogleStrategy(
		{
			clientID: config.auth.google.key,
			clientSecret: config.auth.google.secret,
			callbackURL: "http://127.0.0.1:3000/auth/google/callback"
		},
		function (token, tokenSecret, profile, done) {
			var userEmail = profile.emails[0].value;
			User.findOne({email: userEmail}, function (err, user) {
				if(err) {
					console.log('Error while getting User');
					done(err);
				}
				if(!user) {
					console.log('User not found. Adding user to DB');
					var newUser = new User();
					newUser.name = profile.displayName;
					newUser.email = profile.emails[0].value;
					newUser.photoUrl = profile.photos[0].value;
					newUser.provider = 'Google';
					newUser.providerId = profile.id;
					
					newUser.save(function (err) {
						if(err) {
							console.log('Error while creating new user: ', err);
							done(err);
						}
						done(null, newUser);
					});
				} else {
					done(null, user);
				}
			});
		}
		));
		
		// passport.use(new TwitterStrategy(
	// 	{
	// 		consumerKey: config.auth.twitter.key,
	// 		consumerSecret: config.auth.twitter.secret,
	// 		callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
	// 	},
	// 	function (token, tokenSecret, profile, done) {
	// 		console.log('-------Twitter Profile-------');
	// 		console.log(profile);
	// 		User.findOne({provider: 'Twitter', providerId: profile.id_str}, function (err, user) {
	// 			if(err) {
	// 				console.log('Error while getting User');
	// 				done(err);
	// 			}
	// 			if(!user) {
	// 				console.log('User not found. Adding user to DB');
	// 				var newUser = new User();
					
	// 				newUser.name = profile.name;
	// 				newUser.email = '';
	// 				newUser.photoUrl = profile.profile_image_url;
	// 				newUser.provider = 'Twitter';
	// 				newUser.providerId = profile.id_str;
					
	// 				newUser.save(function (err) {
	// 					if(err) {
	// 						console.log('Error while creating new user: ', err);
	// 						done(err);
	// 					}
	// 					done(null, newUser);
	// 				});
	// 			} else {
	// 				console.log('User found:');
	// 				console.log(user);
					
	// 				done(null, user);
	// 			}
	// 		});
	// 	}
	// 	));
}