const bcrypt = require("bcrypt");

const getNumberOfSaltRounds = () => {
  return 10;
};

const encrypt = async (value) => {
  const result = await bcrypt.hash(value, getNumberOfSaltRounds());
  return result;
};

const compare = async (plaintext, encryptedValue) => {
  try {
    const result = await bcrypt.compare(plaintext, encryptedValue);
    return result;
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};

module.exports = {
  encrypt,
  compare,
};
