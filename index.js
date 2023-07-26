const express = require("express");
const bodyParser = require("body-parser");
const tasksRoutes = require("./routes/tasks-routes");
const environment = require("./config/environment");
const connectDatabase = require("./database/connection");

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.use("/api/tasks", tasksRoutes);


const runServer = async () => {
  try {
    await connectDatabase(environment.database.connectionString);
    app.listen(PORT, () => {
      console.log(`Task manager API is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log("Error occured while connecting to the database.");
  }
}

runServer();