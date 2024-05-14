import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { error } from "console";

const app = express();
const port = process.env.PORT || 3007;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    res.json({ message: "hello" });
});

mongoose.connect(process.env.CONN_STR as string).then(() => {
    console.log("app is connected to database");
    try {
    app.listen(port, () => {
        console.log(`App is listening at port: ${port}`);
    });
} catch (error) {
    console.error("Error starting server:", error);
}

}).catch((error) => {
    console.log("error while connecting to database",error)
})




