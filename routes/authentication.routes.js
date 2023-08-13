const express = require("express");
const authenticationController = require("../controllers/authentication.controller");
const { validateLoginData } = require("../middleware/login-data-validation");
const { checkRefreshToken } = require("../middleware/refresh-token-check");
const {
  validateRegistrationData,
} = require("../middleware/registration-data-validation");

const router = express.Router();

router.post(
  "/registration",
  validateRegistrationData,
  authenticationController.registerUser
);

router.post("/login", validateLoginData, authenticationController.logInUser);

router.post(
  "/access-token-refresh",
  checkRefreshToken,
  authenticationController.refreshAccessToken
);

router.post("/logout", authenticationController.logOutUser);

module.exports = router;
