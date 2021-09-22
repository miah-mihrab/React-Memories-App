import Post from "../models/post.model.js";

export const savePost = async (req, res, next) => {
  try {
    res.status(201).json({ statusCode: 201, msg: "Post created." });
  } catch (err) {
    res.status(500);
    return res.json({
      statusCode: 500,
      msg: "Something went wrong",
      errMsg: err.message,
      stack: process.env,
    });
  }
};

export const getPosts = async (req, res, next) => {
  try {
    const data = await Post.find().lean();
    if (data.length === 0) {
      return res.status(204).send();
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500);
    return res.json({
      statusCode: 500,
      msg: "Something went wrong",
      errMsg: err.message,
      stack: process.env,
    });
  }
};
