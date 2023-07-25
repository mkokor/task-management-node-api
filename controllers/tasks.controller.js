const getAllTasks = (req, res) => {
  res.status(200).send("Task Manager API");
}


module.exports = {
  getAllTasks
}