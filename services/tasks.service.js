const Task = require("../models/Task");
const { CustomApiError } = require("../errors/custom-api-error");

const validateIdStructure = (id) => {
  if (!id.match(/^[0-9a-fA-F]{24}$/))
    throw new CustomApiError("Invalid task identifier.", 400);
};

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
  validateIdStructure(id);
  const task = await Task.findOne({ _id: id });
  validateTaskValue(task);
  return task;
};

const deleteTask = async (id) => {
  validateIdStructure(id);
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
