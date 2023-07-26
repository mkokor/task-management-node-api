const taskService = require("../services/tasks.service");

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
    const status =
      error.message == "Task with provided identifier does not exist."
        ? 404
        : 500;
    res.status(status).json({ message: error.message });
  }
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
