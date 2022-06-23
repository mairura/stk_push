import mongoose from "mongoose";
import { config_file } from "../config.env";

//Connect to DB
export const connectDB = async () => {
  try {
    console.log("Connecting to DB...");
    await mongoose.connect(config_file.mongo_uri);
    console.log("Connected to DB successully");
  } catch (error) {
    console.log("Connection Failed. Try Again!", error);
  }
};
