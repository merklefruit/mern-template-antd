const expressJwt = require("express-jwt");
const userService = require("../users/user.service");

function jwt() {
  const secret = process.env.JWT_SECRET;
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      "/users/authenticate",
      "/users/register"
    ]
  });
}

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);

  // revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }

  done();
}

module.exports = jwt;
