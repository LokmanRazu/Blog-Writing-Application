const User = require("../models/userModel");

exports.signupGetController = (req, res, next) => {
  res.render('pages/auth/signup',{title:'Create a account'})
};

exports.signuppostController = (req,res,next)=>{
  console.log(req.body)
  res.render('pages/auth/signup',{title:'Create a account'})
}
