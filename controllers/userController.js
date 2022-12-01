const User = require("../models/userModel");

exports.getUserController = async (req, res, next) => {
  try {
    const user = await User.find();
  } catch (e) {
    console.log(`I am from get user controller ${e}`);
    next();
  }
};
