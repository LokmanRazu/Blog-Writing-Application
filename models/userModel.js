const { model, Schema } = require("mongoose");
const Profile = require('./userProfileModel')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 15,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: true,
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    profilePics: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;
