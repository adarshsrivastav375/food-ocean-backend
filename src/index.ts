import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3007;

app.use(express.json());
app.use(cors());

import userRoutes from "./Routes/userRoutes";

app.use("/api/user", userRoutes);
mongoose
  .connect(process.env.CONN_STR as string)
  .then(() => {
    console.log("app is connected to database");
    try {
      app.listen(port, () => {
        console.log(`App is listening at port: ${port}`);
      });
    } catch (error) {
      console.error("Error starting server:", error);
    }
  })
  .catch((error) => {
    console.log("error while connecting to database", error);
  });
