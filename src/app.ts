import express from "express";
import mainRouter from "./routes";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import requestLogger from "./middlewares/requestLogger";

dotenv.config();

export const app = express();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URL || "");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => {
  console.log("Connected to Database");
});

app.use(bodyParser.json());
app.use(requestLogger);
app.use(mainRouter);

app.listen(port, () => {
  console.log(`Server running at PORT: ${port}`);
});
