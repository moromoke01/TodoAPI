const router = require('express').Router();
const controller =require("../controller/TodoController")

router
.get("/", controller.getAllTodo)
.get("/:id", controller.getEachTodo)
.post("/", controller.createTodo)
.put("/:id", controller.UpdateTodoList)
.delete("/:id", controller.deleteTodo);




module.exports =router