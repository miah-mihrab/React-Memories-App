import express from "express";
import PostRoutes from "./posts.routes.js";

const Router = express.Router();

Router.use("/posts", PostRoutes);

export default Router;
