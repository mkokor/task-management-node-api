const { Task } = require("../models/Task");
const errors = require("../errors/errors");

const checkTaskValuePresent = (task) => {
  if (!task)
    throw new errors.NotFoundError(
      "User does not own task with provided identifier."
    );
};

const createTask = async (task, user) => {
  const result = await Task.create({ ...task, owner: user._id });
  return result;
};

const getAllTasks = async (user) => {
  const allTasks = await Task.find({ owner: user._id }).populate("owner");
  return allTasks;
};

const getTaskById = async (taskId, user) => {
  const task = await Task.findOne({ _id: taskId, owner: user._id });
  checkTaskValuePresent(task);
  return task;
};

const deleteTask = async (taskId, user) => {
  const task = await Task.findOneAndDelete({ _id: taskId, owner: user._id });
  checkTaskValuePresent(task);
};

const updateTask = async (id, newValues) => {
  const updatedTask = await Task.findOneAndUpdate({ _id: id }, newValues, {
    new: true,
    runValidators: true,
  });
  checkTaskValuePresent(updatedTask);
  return updatedTask;
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  deleteTask,
  updateTask,
};
