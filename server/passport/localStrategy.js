import User from '../models/auth';
import bcrypt from 'bcrypt';
let LocalStrategy = require('passport-local')

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	(username, password, done) => {
    console.log('getting into local strategy')
    User.findOne({ username: username }, (err, user) => {
      console.log('User '+ username +' attempted to log in.');
      if (err) { console.log('err1 in local Str'); return done(err); }
      if (!user) { console.log('err2 in local Str'); return done(null, false); }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res == true) {
          return done(null, user);
        }
        return done(null, false);
      })        
    });
		/* User.findOne({ username: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		}) */
	}
)

module.exports = strategy
