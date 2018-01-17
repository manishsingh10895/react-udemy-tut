const
    config = require('./../config'),
    passport = require('passport'),
    ErrorHandler = require('../services/error-handler.service'),
    User = require('../models/user.model'),
    GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        if(err) return done(err);

        done(null, user);
    });
});

passport.use(new GoogleStrategy(
    {
        clientID: config.auth.GOOGLE_CLIENT_ID,
        clientSecret: config.auth.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log(accessToken);

        console.log(refreshToken);

        console.log(profile);

        User.findOne({ googleId: profile.id })
            .then((user) => {
                if(user) { 
                    done(null, user); 
                } else {

                    let newUser = new User({ googleId: profile.id });

                    newUser.save((err, savedUser) => {
                        if(err) done(err);
            
                        done(null, savedUser);        
                    });
                }
            });
    }
));