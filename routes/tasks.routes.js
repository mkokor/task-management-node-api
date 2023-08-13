const express = require("express");
const tasksController = require("../controllers/tasks.controller");
const { validateTaskFields } = require("../middleware/task-fields-validation");

const router = express.Router();

router
  .route("/")
  .get(tasksController.getAllTasks)
  .post(validateTaskFields, tasksController.createTask);

router
  .route("/:id")
  .get(tasksController.getTaskById)
  .patch(tasksController.updateTask)
  .delete(tasksController.deleteTask);

module.exports = router;
