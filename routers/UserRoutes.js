const router = require('express').Router();

const { signupGetController,signuppostController,loginGetController,loginPostController  }  = require('../controllers/userController')

router.get('/auth/signup',signupGetController);
router.post('/auth/signup',signuppostController);
router.get('/auth/login',loginGetController)
router.post('/auth/login',loginPostController)
module.exports = router