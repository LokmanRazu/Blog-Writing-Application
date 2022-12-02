const router = require('express').Router();

const { signupGetController,signuppostController  }  = require('../controllers/userController')

router.get('/signup',signupGetController);
router.post('/signup',signuppostController);
module.exports = router