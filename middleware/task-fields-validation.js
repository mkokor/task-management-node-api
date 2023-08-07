const errors = require("../errors/errors");

const validateTaskFields = (req, res, next) => {
  if (!req.body.title)
    throw new errors.BadRequestError("Title field is required.");
  if (req.body.title.length > 20)
    throw new errors.BadRequestError(
      "Title cannot contain more than 20 characters."
    );
};

module.exports = { validateTaskFields };
