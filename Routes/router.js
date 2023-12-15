const express=require('express')
const router =new express.Router()
const userController=require('../controllers/userController')
const bookControlllers=require('../controllers/bookControllers')
const jwtMiddleware = require('../middlewre/jwtMiddleware')
const multerConfig = require('../middlewre/multerMiddle')
router.post('/user/register',userController.register)
//login 
router.post('/user/login',userController.login)
//add book
router.post('/book/add',jwtMiddleware,multerConfig.single('imageUrl'),bookControlllers.addBooks)



module.exports=router