const mongoose = require("mongoose");
const { connectionString } = require("../config/environment");


mongoose.connect(connectionString)
        .then(() => {
          console.log("Server is connected to the database.")
        })
        .catch(() => {
          console.log("Error occured while connecting to the database.");
        })