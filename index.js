const express = require("express");
const tasksRouter = require("./routes/tasks.route");

const app = express();
const PORT = 3000;


app.use("/api/tasks", tasksRouter);


app.listen(PORT, () => {
  console.log(`Task manager API is listening on port ${PORT}...`);
});