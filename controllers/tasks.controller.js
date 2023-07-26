const Task = require("../models/Task");
const taskService = require("../services/tasks.service");

const setStatusCode = (error) => {
  return error.message == "Task with provided identifier does not exist."
    ? 404
    : 500;
};

const getAllTasks = async (req, res) => {
  try {
    const result = await taskService.getAllTasks();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    const result = await taskService.createTask(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTask = async (req, res) => {
  try {
    const result = await taskService.getTaskById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(setStatusCode(error)).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const result = await taskService.updateTask(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(setStatusCode(error)).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.status(200).json({ message: "Task successfully deleted." });
  } catch (error) {
    res.status(setStatusCode(error)).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
