const ToDo = require('../model/ToDo')

//get all users
exports.getAllTodo = async(req, res) =>{
  try{
    let AllTodo = await ToDo.find();
    res.status(200).json({
        success: true,
        message:"All ToDo list found",
        AllTodo,
        count:AllTodo.length
    });
  } catch(error){
    res.status(500).json({
        success:false,
        message: "Internal Server error",
        error:error.message
    })
  }
};

//get Each list on Todo
exports.getEachTodo = async (req, res)=>{
  try{
    let id ={_id:req.params.id};
    let Eachtodo = await ToDo.findOne(id);
    if(!Eachtodo) return res.status(404).json({
      success:false,
      message: "Todo list not found"
    });
    res.status(200).json({
      success: true,
      message:"Todo found on the list",
      Eachtodo
    })
  }catch(error){
    res.status(500).json({
      success:false,
      message: "Internal Server Error",
      error: error.message
    })
  }
}


//create a Todo List
exports.createTodo = async (req, res) =>{
  try{
    let todo = await req.body;
    let TodoCreated = await ToDo.create(todo);
    if(!TodoCreated) return res.status(404).json({
      sucess: false,
      message: "Todo creation failed"

    })
    return res.status(200).json({
      success: true,
      message: "Todo created successfully",
      Todolist: TodoCreated 
    })
  }catch(error){
    res.status(500).json({
      sucess:false,
      message:"Internal Server Error",
      Error: error.message
    })
  }
}

//update Todo list
exports.UpdateTodoList = async(req, res) =>{
  try{
    let id ={_id:req.params.id}
    let todo = await req.body;
    let updateList = await ToDo.findOneAndUpdate(id, todo, {new:true});

    if(!updateList) return res.status(404).json({
      success:false,
      message: "Todo not found on list"
    })
    return res.status(200).json({
      success: true,
      message: "Todo found on list",
      updateList,

    })
  }catch(error){
    return res.status(500).json({
      success:false,
      message: error.message
    })
  }
}

//Delete each Todo on the list
exports.deleteTodo = async(req, res) =>{
  try{
    let id ={_id:req.params.id}
    let TodoDelete = await ToDo.findOneAndRemove(id);
    if(!TodoDelete) return res.status(404).json({
      success:false,
      message: 'Todo not Deleted'
    });
    return res.status(200).json({
      success:true,
      message: 'Todo Deleted from the list'
    })
  }catch(error){
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    })
  }
}