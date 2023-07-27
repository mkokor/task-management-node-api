const { CustomApiError } = require("../errors/custom-api-error");

const taskIdValidation = (req, res, next) => {
  if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) return next();
  throw new CustomApiError("Invalid task identifier.", 400);
};

module.exports = { taskIdValidation };
