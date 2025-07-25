const Todo = require("../models/todo")


async function createTodo(req,res){
    const {title, description,completed } = req.body;


    try{
        const newTodo = await Todo.create({
            title,
            description,
            completed,
            userId: req.userId
        });
        res.status(201).json(newTodo);

    } 
    catch(error){
        console.error("Error on creating todo", error);
        res.status(500).json({msg: "Failed to create todp"});
    }
    
}

async function getTodos(req,res){
    try {
        const todos = await Todo.find({ userId: req.userId });
        res.json(todos);
    } catch (error) {
        console.error("Get todos error:", error);
        res.status(500).json({ msg: "Failed to fetch todos" });
    }
}
//updating todo

async function updateTodo(req,res){
    const { id }= req.params;
    const { title, description, completed } = req.body;

    try{
        const updated = await Todo.findOneAndUpdate(
            { _id: id,
             userId: req.userId},
             {
                title,
                description,
                completed
             },
             {
                new: true
             }
            
        );
        if(!updated) return res.json({msg: "Todo not found!"})
    }
    catch(error){
        console.error("udpate error!");
        res.status(500).json({
            msg: "Failed to update todo"
        })
    }
}

// deleting the todo

async function deleteTodo(req, res) {
    const { id } = req.params;

    try {
        const deleted = await Todo.findOneAndDelete({ _id: id, userId: req.userId });

        if (!deleted) return res.status(404).json({ msg: "Todo not found" });

        res.json({ msg: "Todo deleted successfully" });
    } catch (error) {
        console.error("Delete error:", error);
        res.status(500).json({ msg: "Failed to delete todo" });
    }
}

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
};