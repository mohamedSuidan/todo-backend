const express = require("express");
const app = express();
let mongoose = require("mongoose");
let cors = require("cors");
let todo = require("./routes/todo");
app.use(cors());
app.use(todo)
let connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://msuidan149:wbhKqOg8Un8t2uHt@todo_app.modnsdi.mongodb.net/todo_app?retryWrites=true&w=majority");
    app.listen(process.env.PORT || 4000, () => console.log("server listen"));
  } catch (err) {
    console.log(err);
  }
};
connect();
