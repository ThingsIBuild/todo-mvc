import express from "express"
import { config } from "dotenv";
import morgan from "morgan"
import database_init from "./db/connect.js";
import todoRoutes from './routes/todo.routes.js';
import Todo from "./models/todo.model.js";

config();

const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.render('index', { title: 'Todo App', todos });
});


app.use('/api/v1', todoRoutes);


const PORT = process.env.PORT || 3000;


const startApp = async () => {
    await database_init();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startApp();
