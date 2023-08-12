require("express-async-errors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const tasksRoutes = require("./routes/tasks.routes");
const authenticationRoutes = require("./routes/authentication.routes");
const environment = require("./config/environment");
const { connectDatabase } = require("./config/database");
const { notFoundRoute } = require("./middleware/not-found");
const { errorHandler } = require("./middleware/error-handler");
const { taskIdValidation } = require("./middleware/task-id-validation");
const { authenticateUser } = require("./middleware/authentication");

const app = express();
const port = environment.application.port;

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/tasks", authenticateUser);
app.use("/api/tasks/:id", taskIdValidation);

app.use("/api/authentication", authenticationRoutes);
app.use("/api/tasks", tasksRoutes);
app.use(notFoundRoute);

app.use(errorHandler);

const runServer = async () => {
  try {
    await connectDatabase(environment.database.connectionString);
    app.listen(port, () => {
      console.log(`Task manager API is listening on port ${port}...`);
    });
  } catch (error) {
    console.log("Error occured while connecting to the database.");
  }
};

runServer();
