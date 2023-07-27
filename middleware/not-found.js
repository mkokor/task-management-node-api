const notFoundRoute = (req, res) => {
  res.status(404).json({
    message: "Invalid route.",
  });
};

module.exports = { notFoundRoute };
