const Task = require("../models/Task");

const createTask = async (task) => {
  const result = await Task.create(task);
  return result;
};

const getAllTasks = async () => {
  const allTasks = await Task.find();
  return allTasks;
};

const getTaskById = async (id) => {
  if (!id.match(/^[0-9a-fA-F]{24}$/))
    throw new Error("Invalid task identifier.");
  const task = await Task.findOne({ _id: id });
  if (!task) throw new Error("Task with provided identifier does not exist.");
  return task;
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
};
