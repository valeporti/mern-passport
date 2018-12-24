import passport from 'passport';
const LocalStrategy = require('./localStrategy');
import User from '../models/auth';
const ObjectID = require('mongodb').ObjectID;

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
  //done(null, { _id: user._id })
  done(null, user._id)
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	User.findOne(
		/* { _id: id },
		'username',
		(err, user) => {
			console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
			done(null, user)
    } */
    {_id: new ObjectID(id)},
    'username', 
    (err, user) => {
      console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
      done(null, doc);
    }
	)
})

//  Use Strategies 
passport.use(LocalStrategy)

module.exports = passport
