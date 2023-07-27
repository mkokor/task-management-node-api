const Task = require("../models/Task");
const { CustomApiError } = require("../errors/custom-api-error");

const validateTaskValue = (task) => {
  if (!task)
    throw new CustomApiError(
      "Task with provided identifier does not exist.",
      404
    );
};

const createTask = async (task) => {
  const result = await Task.create(task);
  return result;
};

const getAllTasks = async () => {
  const allTasks = await Task.find();
  return allTasks;
};

const getTaskById = async (id) => {
  const task = await Task.findOne({ _id: id });
  validateTaskValue(task);
  return task;
};

const deleteTask = async (id) => {
  const task = await Task.findOneAndDelete({ _id: id });
  validateTaskValue(task);
};

const updateTask = async (id, newValues) => {
  const updatedTask = await Task.findOneAndUpdate({ _id: id }, newValues, {
    new: true,
    runValidators: true,
  });
  validateTaskValue(updatedTask);
  return updatedTask;
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  deleteTask,
  updateTask,
};
