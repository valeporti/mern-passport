import Auth from '../models/auth';
import bcrypt from 'bcrypt';
import passport from 'passport';

const HASH_ROUNDS = 12

export function getSomething(req, res) {
  return res.status(200).end();
}

export function signUp(req, res, next) {
  console.log('server')
  //let new_user = new Auth(req.body.user);
  //console.log(req.body.user)
  //console.log(new_user)
 
  bcrypt.hash(req.body.user.password, HASH_ROUNDS, function(err, hash) {
    if (err) { res.status(500).send(err); }
    else {
      req.body.user.password = hash;
      Auth.create(req.body.user, (err, new_user) => {
        if (err) { res.status(500).send(err) }
        else { res.json({user: new_user}); }
      });
    }
  })
  
  /* Auth.findOne({ email: new_user.email }, function (err, user) {
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
