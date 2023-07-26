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
});

module.exports = mongoose.model("Task", TaskSchema);
