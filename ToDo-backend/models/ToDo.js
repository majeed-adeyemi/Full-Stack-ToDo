const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  date: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;