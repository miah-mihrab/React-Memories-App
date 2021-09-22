import express from "express";
import { savePost, getPosts } from "../controllers/post.controller.js";

const Router = express.Router();

Router.post("/", savePost);
Router.get("/", getPosts);

export default Router;
