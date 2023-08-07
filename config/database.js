const mongoose = require("mongoose");

const connectDatabase = async (connectionString) => {
  await mongoose.connect(connectionString);
};

module.exports = { connectDatabase };
