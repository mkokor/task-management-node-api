const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Task title field is required."],
    maxlength: [20, "Title cannot contain more than 20 characters."],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Task owner field is required."],
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task };
