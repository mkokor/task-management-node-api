const express = require("express");
const bodyParser = require("body-parser");
const tasksRoutes = require("./routes/tasks-routes");
require("./database/connection");

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.use("/api/tasks", tasksRoutes);


app.listen(PORT, () => {
  console.log(`Task manager API is listening on port ${PORT}...`);
});