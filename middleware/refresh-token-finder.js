const errors = require("../errors/errors");

const findRefreshToken = (req, res, next) => {
  if (!req.cookies.refreshToken)
    throw new errors.UnauthenticatedError("Refresh token missing.");
  next();
};

module.exports = { findRefreshToken };
