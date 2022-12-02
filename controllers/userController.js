const User = require("../models/userModel");
const bcrypt = require('bcrypt')

exports.signupGetController = (req, res, next) => {
  res.render('pages/auth/signup',{title:'Create a account'})
};

exports.signuppostController =async (req,res,next)=>{
try{
  let {username,email,password} = req.body
  let hashedPassword =await bcrypt.hash(password,11)
  let user = new User({
    username,
    email,
    password:hashedPassword
  })
  let createduser = await user.save()
  console.log(`The created user ${createduser}`)
  res.render('pages/auth/signup',{title:'Create a account'})

}catch(e){
  console.log(e)
  next(e)
}

}

exports.loginGetController = (req, res, next)=>{
  res.render('pages/auth/login',{title:'Login To Your Account '})

}

exports.loginPostController =async (req, res, next)=>{
  let {email,password} = req.body
  try{
      let user = await User.findOne({ email })
      if(!user){
          return res.json({
              message:'Invalid Credential'
          })
      }
      let match =await bcrypt.compare(password, user.password)
      if(!match){
          return res.json({
              message:'Invalid Credential'
          })
          
      }
console.log(user)
res.render('pages/auth/login',{title:'Login To Your Account '})

  }
  catch(e){
      console.log(e)
      next()
  }
}

