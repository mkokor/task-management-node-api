const bcrypt = require("bcrypt");
const tokenUtility = require("./utils/token-utility");

refreshToken1 =
  "WtsJJjOv0tSuNJ0F+Cc2Qt2FKtjUTHCQvemW34zGbbCeZx3kopGcgTwqZcV7LcP4wvkeC7/WXuRQz6Q8uzGtKA==";
res1 = "$2b$10$7FKeSUQFPuL3uWu1svfN7uYZLF7VNlPsoeo32C.fYBxqwrSJd/B7e";

bcrypt.compare(refreshToken1, res1, (err, result) => {
  console.log(result);
});
