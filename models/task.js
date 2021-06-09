const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  taskDescription: { type: String },
  closed: {type: Boolean},
  openDate: { type: Date, default: Date.now },
  closedDate: { type: Date}
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
