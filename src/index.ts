import express from "express";
import cors from "cors";
import { config_file } from "./config.env";
import { connectDB } from "./connectDB/connectDB";
import { authToken } from "./controllers/auth";

export const app = express();

const PORT = config_file.port || 3000;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.send("TESTING OUT DARAJA API");
});

import "./routes/app";

//connect to DB
connectDB();

//Setting up our server
app.listen(PORT, () => {
  try {
    console.log(`Server listening on port ${PORT}`);
  } catch (error) {
    console.log(`Server error: `, error);
  }
});
