import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required."],
      trim: true,
      index: true,
    },
    message: {
      type: String,
      required: [true, "Message is required."],
      trim: true,
    },
    creator: {
      type: String,
      default: "anonymous",
      trim: true,
      index: true,
    },
    tags: [String],
    selectedFile: {
      type: String,
      default: "",
      trim: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", PostSchema);

export default Post;
