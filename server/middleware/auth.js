/**
 * Ensure that the user is authenticated in private urls
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export function ensureAuthenticated(req, res, next) {
  console.log('-------- ensure auth --------')
  if (req.isAuthenticated()) {
    console.log(req.isAuthenticated())
    return next();
  }
  res.status(403).send({username: null});
};