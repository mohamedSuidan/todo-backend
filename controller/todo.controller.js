let todoModel = require("../model/todo.model");
exports.getList = async (req, res, next) => {
  let todo = await todoModel.find({});
  res.json({
    data: todo,
  });
};
exports.addList = async (req, res, next) => {
  let list = new todoModel({
    todo: req.body.text,
    done: false,
    user_id: "",
  });
  await list.save();
  let id = await todoModel.findOne({}, {}, { sort: { _id: -1 } });
  res.send(id);
};
exports.doneList = async (req, res, next) => {
  let listById = await todoModel.findById(req.body.id);
  if (listById.done === false) {
    if (req.body.id.match(/^[0-9a-fA-F]{24}$/)) {
      await todoModel.findByIdAndUpdate(req.body.id, { done: true });
    }
  } else {
    if (req.body.id.match(/^[0-9a-fA-F]{24}$/)) {
      await todoModel.findByIdAndUpdate(req.body.id, { done: false });
    }
  }
  res.send("done");
};
exports.delList = async (req, res, next) => {
  if (req.query.id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
    await todoModel.findByIdAndDelete(req.query.id);
  }

  res.send("deleted");
};
