const { Task } = require("../models/Task");
const errors = require("../errors/errors");

const checkTaskValuePresent = (task) => {
  if (!task)
    throw new errors.NotFoundError(
      "Task with provided identifier does not exist."
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
  checkTaskValuePresent(task);
  return task;
};

const deleteTask = async (id) => {
  const task = await Task.findOneAndDelete({ _id: id });
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
