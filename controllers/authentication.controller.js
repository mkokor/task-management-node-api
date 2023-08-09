const authenticationService = require("../services/authentication.service");

const setRefreshTokenCookie = (res, refreshToken) => {
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "None",
    // secure: true,
    maxAge: 24 * 60 * 60 * 24,
  });
};

const registerUser = async (req, res) => {
  const result = await authenticationService.registerUser(req.body);
  res.status(201).json(result);
};

const logInUser = async (req, res) => {
  const { accessToken, refreshToken } = await authenticationService.logInUser(
    req.body
  );
  setRefreshTokenCookie(res, refreshToken);
  res.status(200).json({ accessToken });
};

module.exports = {
  registerUser,
  logInUser,
};
