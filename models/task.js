const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  closed: {type: Boolean},
  openDate: { type: Date, default: Date.now },
  closedDate: { type: Date, default: Date.now }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Book;
