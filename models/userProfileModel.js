const { model, Schema } = require("mongoose");
const User = require('./userModel');
const Post = require('./userPostModel');

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      trim: true,
      maxlangth: 100,
    },
    bio: {
      type: String,
      trim: true,
      maxlangth: 500,
    },
    profilePics: String,
    links: {
      website: String,
      facebook: String,
      twitter: String,
      github: String,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    bookmark: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);

const Profile = model("Profile", profileSchema);
module.exports = Profile;
