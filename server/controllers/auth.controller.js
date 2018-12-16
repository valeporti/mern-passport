import Auth from '../models/auth';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function signUp(req, res) {
  
  const new_user = new Auth(req.query.user);

  
  
}
