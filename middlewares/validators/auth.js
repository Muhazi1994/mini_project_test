// Import decode token
const { decodeToken } = require("../../helpers/jwt");

// Make validator authentication
class Auth {
  static isSignedIn(req, res, next) {
    if (!req.headers.token) {
      return res.status(401).json({
        statusCode: 401,
        message: "Please sign in first",
      });
    }
    //   Save token to userData
    let token = req.headers.token;
    console.log(token);
    let userData = decodeToken(token);
    req.userData = userData;
    console.log(userData);

    next();
  }
}

module.exports = Auth;
