import { Router } from 'express';
import * as auth from '../middleware/auth'
import * as AuthController from '../controllers/auth.controller';
import passport from 'passport';
//require('../passport')(passport);
//const passport = require('../passport');

const router = new Router();

router.route('/register').post(AuthController.signUp); 

//router.route('/login').post(AuthController.logInPassport, AuthController.logInPassResponse);

router.post('/login',
    (req, res, next) => {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),//, { failureRedirect: '/' }),
    AuthController.logInPassResponse
  ) 

export default router;

/*

module.exports = function (app, db) {
    
  
  app.route('/profile')
  .get(ensureAuthenticated, (req,res) => {
       res.render(process.cwd() + '/views/pug/profile', {
         username: req.user.username
       });
  });
  
  app.route('/login')
    .post(passport.authenticate('local', { failureRedirect: '/' }),(req,res) => {
         res.redirect('/profile');
    });
  
  app.route('/logout')
  .get((req, res) => {
      req.logout();
      res.redirect('/');
  });
  
  app.route('/register')
        .post((req, res, next) => {
            db.collection('users').findOne({ username: req.body.username }, function (err, user) {
                if(err) {
                    next(err);
                } else if (user) {
                    res.redirect('/');
                } else {
                  var hash = bcrypt.hash(req.body.password, 12);
                    db.collection('users').insertOne(
                      {username: req.body.username,
                       password: hash},
                      (err, doc) => {
                          if(err) {
                              res.redirect('/');
                          } else {
                              next(null, user);
                          }
                      }
                    )
                }
            })},
          passport.authenticate('local', { failureRedirect: '/' }),
          (req, res, next) => {
              res.redirect('/profile');
          }
      );
  
    //handle missing pages
  app.use((req, res, next) => {
      res.status(404)
        .type('text')
        .send('Not Found');
    });

}

*/