const mongoose = require("mongoose");
const { CustomApiError } = require("../errors/custom-api-error");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: [true, "Task title field is required."],
    // maxlength: [20, "Title cannot contain more than 20 characters."],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Pre middleware function is set up mannually so that the server can control Mongoose error.
TaskSchema.pre("validate", function () {
  if (!this.title) throw new CustomApiError("Title field is required.", 400);
  if (this.title.length > 20)
    throw new CustomApiError(
      "Title cannot contain more than 20 characters.",
      400
    );
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task };
