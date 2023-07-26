const Task = require("../models/Task");

const createTask = async (task) => {
  const result = await Task.create(task);
  return result;
};

module.exports = {
  createTask,
};
