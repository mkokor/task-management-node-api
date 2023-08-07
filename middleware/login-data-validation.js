const errors = require("../errors/errors");

const validateLoginData = (req, res, next) => {
  if (!req.body.username || !req.body.password)
    throw new errors.BadRequestError(
      "Incomplete data! Provide: username and password."
    );
  next();
};

module.exports = {
  validateLoginData,
};
