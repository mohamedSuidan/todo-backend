const route = require("express").Router();
const bodyParser = require("body-parser");
let todoController = require("../controller/todo.controller");
route.get("/todo", todoController.getList);
route.post("/todo/add", bodyParser.json(), todoController.addList);
route.post("/todo/done", bodyParser.json(), todoController.doneList);
route.get("/todo/del", todoController.delList);
module.exports = route;
