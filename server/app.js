import dotenv from "dotenv";
dotenv.config();
// ------------------- //

import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import routes from "./routes/routes.js";

const app = express();

// DB Connection
connectDB();

// Middlewares
app.use(express.json({ extended: true, limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1", routes);

export default app;
