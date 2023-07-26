const taskService = require("../services/tasks-service");

const getAllTasks = (req, res) => {
  res.status(200).send("All Tasks");
};

const createTask = async (req, res) => {
  const task = await taskService.createTask(req.body);
  res.status(201).json(task);
};

const getTask = (req, res) => {
  res.status(200).json({
    test: "test",
  });
};

const updateTask = (req, res) => {
  res.status(200).send("Update Task");
};

const deleteTask = (req, res) => {
  res.status(200).send("Delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
