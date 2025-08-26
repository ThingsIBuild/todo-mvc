import express from 'express';
import { createTodo , updateTodo , getTodoEditPage , deleteTodo} from '../controllers/todo.controller.js';
const router = express.Router();

router.post('/todos', createTodo )
router.get('/todos/:id/edit', getTodoEditPage)
router.post('/todos/:id', updateTodo )
router.post('/todos/:id/delete', deleteTodo)

export default router;
