require('dotenv').config();
import bcrypt from 'bcrypt';
import passport from 'passport';
//import LocalStrategy from 'passport-local';
let LocalStrategy = require('passport-local').Strategy;
const ObjectID = require('mongodb').ObjectID;
import User from './models/auth';

//serialization and app.listen 
passport.serializeUser((user, done) => {
  console.log('serializing user')
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  console.log('desirializeing')
  User.findOne(
    {_id: new ObjectID(id)},
    (err, doc) => {
      done(null, doc);
    }
  );
});

passport.use(new LocalStrategy(
  (username, password, done) => {
    console.log('getting into local strategy')
    User.findOne({ username: username }, (err, user) => {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      //if (password !== user.password) { return done(null, false); }
      if (!bcrypt.compare(password, user.password)) { return done(null, false); }
      return done(null, user);
    });
  }
)); 

