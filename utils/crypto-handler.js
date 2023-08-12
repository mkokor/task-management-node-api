const bcrypt = require("bcrypt");
const crypto = require("crypto");
const errrors = require("../errors/errors");

const getNumberOfSaltRounds = () => {
  return 10;
};

const hash = async (value) => {
  const result = await bcrypt.hash(value, getNumberOfSaltRounds());
  return result;
};

const compare = async (value, valueHash) => {
  try {
    const result = await bcrypt.compare(value, valueHash);
    return result;
  } catch (error) {
    throw new errrors.InternalServerError("Something went wrong.");
  }
};

const generateRandomString = () => {
  return crypto.randomBytes(64).toString("base64");
};

module.exports = {
  hash,
  compare,
  generateRandomString,
};
