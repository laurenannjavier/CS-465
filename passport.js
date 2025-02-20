const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

// Ensure the model is registered before using it
require('../models/user'); // Adjust path if necessary
const User = mongoose.model('User'); // Now this will find the 'User' model

passport.use(new LocalStrategy({
    usernameField: 'email' // Define the field that will be used as the username (email in this case)
},
    (username, password, done) => {
        User.findOne({ email: username }, (err, user) => {
            if (err) { return done(err); }  // Handle any errors during the query
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.' // If no user is found
                });
            }
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.' // If password is incorrect
                });
            }
            return done(null, user); // Successfully authenticated
        });
    }
));

// Session serialization (optional, for session support)
passport.serializeUser((user, done) => {
    done(null, user.id); // Store only the user id in the session
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user); // Retrieve the full user object using the stored id
    });
});
