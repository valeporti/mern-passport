import User from '../models/auth';
import bcrypt from 'bcrypt';
import passport from 'passport';

const HASH_ROUNDS = 12

export function logOut(req, res) {
  req.logout();
  res.status(200).send();
}

export function sessionUser(req, res, next) {
  console.log('===== user!!======')
  //console.log(req.session)
  console.log(req.user)
  if (req.user) {
    res.send({ username: req.user.username })
  } else {
    console.log('-- why here?? session user response not user found')
    res.send({ username: null })
  }
}

export function logIn(req, res, next) {
  console.log('on log in controller')
  console.log('routes/user.js, login, req.body: ');
  console.log(req.body)
  next()
}
export function logInPassResponse(req, res) {
  res.send({username: req.user.username})
}

export function signUp(req, res, next) {
  console.log('on sign Up controller') 
  console.log(req.body.user)
  bcrypt.hash(req.body.user.password, HASH_ROUNDS, (err, hash) =>  {
    if (err) { res.status(500).send(err); }
    else {
      console.log(req.body.user)
      req.body.user.password = hash;
      req.body.user.username = req.body.user.email;
      User.create(req.body.user, (err, new_user) => {
        if (err) { res.status(500).send(err) }
        else { 
          // don't send password
          console.log('user saved')
          res.json({user: {
            first_name: new_user.first_name,
            email: new_user.email,
          }}); 
        }
      })     
    }
  })
}
