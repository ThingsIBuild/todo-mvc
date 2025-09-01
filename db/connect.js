import mongoose from "mongoose"; 
import config from "../configs/index.js";


const database_init = async () => {

  try {
    await mongoose.connect(config.db_url,{dbName: "todo_mvc"});
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

export default database_init;
