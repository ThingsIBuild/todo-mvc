import mongoose from "mongoose"; 

const database_init = async () => {
  try {
    await mongoose.connect(process.env.DB_URI,{dbName: "todo_mvc"});
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

export default database_init;
