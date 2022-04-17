const router=require('express').Router();
const {register,login,deleteUser}= require('../controllers/userCtrl')
const auth=require("../middleware/auth")
router.post('/login',login)
router.post('/register',register)
router.post('/deleteuser/:id',deleteUser)
module.exports=router;