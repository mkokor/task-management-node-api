const express = require("express");
const authenticationController = require("../controllers/authentication.controller");
const {
  validateRegistrationData,
} = require("../middleware/registration-data-validation");

const router = express.Router();

router.post(
  "/registration",
  validateRegistrationData,
  authenticationController.registerUser
);

module.exports = router;
