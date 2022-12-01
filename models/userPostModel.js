const { model, Schema, trusted } = require("mongoose");
const User = require("./userModel");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlangth: 100,
    },
    body: {
      type: String,
      required: true,
    },
    authore: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: {
      type: [String],
      requiured: true,
    },
    thumbnail: String,
    readTime: String,
    links: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    dislikes: [
      {
        type: Schema.Types.object,
        ref: "User",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);
module.exports = Post;
