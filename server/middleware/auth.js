export {
  ensureAuthenticated
}

/**
 * Ensure that the user is authenticated in private urls
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/');
};