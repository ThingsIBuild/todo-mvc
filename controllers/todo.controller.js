
import Todo from '../models/todo.model.js';


export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log(title, description)
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


