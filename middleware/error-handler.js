const errorHandler = (err, req, res, next) => {
  const { status, message } = err.statusCode
    ? { status: err.statusCode, message: err.message }
    : { status: 500, message: "Something went wrong." };
  res.status(status).json({ message: message });
};

module.exports = { errorHandler };
