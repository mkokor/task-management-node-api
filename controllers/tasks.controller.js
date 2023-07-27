const taskService = require("../services/tasks.service");

const getAllTasks = async (req, res) => {
  const result = await taskService.getAllTasks();
  res.status(200).json(result);
};

const createTask = async (req, res) => {
  const result = await taskService.createTask(req.body);
  res.status(201).json(result);
};

const getTask = async (req, res) => {
  const result = await taskService.getTaskById(req.params.id);
  res.status(200).json(result);
};

const updateTask = async (req, res) => {
  const result = await taskService.updateTask(req.params.id, req.body);
  res.status(200).json(result);
};

const deleteTask = async (req, res) => {
  await taskService.deleteTask(req.params.id);
  res.status(200).json({ message: "Task successfully deleted." });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
