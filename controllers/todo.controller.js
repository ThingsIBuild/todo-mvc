
import Todo from '../models/todo.model.js';


export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }
        const newTodo = new Todo({ title, description });
        await newTodo.save();
        res.status(201).redirect('/');
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({ message: "Error creating todo", error });
    }
};



export const getTodoEditPage = async  (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.render('edit', { todo });
    } catch (error) {
        console.error("Error fetching todo for edit:", error);
        res.status(500).json({ message: "Error fetching todo for edit", error });
    }
}

export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(id, { title, description }, { new: true });
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.redirect('/');
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({ message: "Error updating todo", error });
    }
};



export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.redirect('/');
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Error deleting todo", error });
    }
};



