const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
  res.send("Task Manager API");
});


module.exports = router;