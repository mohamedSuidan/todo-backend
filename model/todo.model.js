const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  todo: String,
  done: Boolean,
  user_id: String,
});

const todo = mongoose.model("list", todoSchema);

module.exports = todo;
