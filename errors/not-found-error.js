const { StatusCodes } = require("http-status-codes");
const { CustomApiError } = require("./custom-api-error");

class NotFoundError extends CustomApiError {
  constructor(message) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

module.exports = { NotFoundError };
