import User from '../models/auth';
import bcrypt from 'bcrypt';
import passport from 'passport';

const HASH_ROUNDS = 12

export function logIn(req, res, next) {
  console.log('on log in controller')
  //console.log(req.credentials)
  passport.authenticate('local', (err, user, info) => {
    console.log('inpassport')
    console.log(info)
    console.log(user)
    console.log(err)
    /* if (err) { return next(err); }
    if (!user) { return res.redirect('/'); }

    // req / res held in closure
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.send(user);
    }); */
  })(req, res, next);
}

export function signUp(req, res, next) {
  console.log('on controller')
  //let new_user = new Auth(req.body.user);
  //console.log(req.body.user)
  //console.log(new_user)
 
  bcrypt.hash(req.body.user.password, HASH_ROUNDS, (err, hash) =>  {
    if (err) { res.status(500).send(err); }
    else {
      req.body.user.password = hash;
      req.body.user.username = req.body.user.email
      User.create(req.body.user, (err, new_user) => {
        if (err) { res.status(500).send(err) }
        else { 
          // don't send password
          console.log('here pass')
          
          res.json({user: {
            name: new_user.name,
            email: new_user.email,
          }}); 
        }
      })
       /*  passport.authenticate('local', (err, user, info) => {
          console.log('inpassport')
          console.log(info)
          console.log(user)
          console.log(err)
        })(req, res, next) */
      
    }
  })
  
  /* User.findOne({ email: new_user.email }, function (err, user) {
    if (err) { next(err); }
    else if (user) { console.log('existant'); res.status(500).json({ error: user }); } // error already existant user
    else {
      bcrypt.hash(new_user.password, HASH_ROUNDS, function(err, hash) {
        if (err) { res.status(500).send(err); }
        else {
          new_user.password = hash;
          console.log('hash')
          console.log(new_user.password)
          new_user.save((err, saved) => {
            if (err) { res.status(500).send(err); }
            else { 
              console.log('what is asaved')
              console.log(saved)
              res.json({user: saved});
            }
          });
        }
      });
    }
  }); */
 
  /* passport.authenticate('local', { failureRedirect: '/' }),
  (req, res, next) => {
    res.redirect('/profile');
  } */

}
