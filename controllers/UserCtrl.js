const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
    register: async (req, res) => {
      try {
        const { username, email, password,age ,gender,address} = req.body;
        //check if user Already exist in DB or not
        const user = await User.findOne({ email });
        //return this message if user exist in db
        if (user) return res.status(400).json({ msg: "This user Already Exist" });
        //check length of password
        if (password.length < 6)
          return res.status(400).json({ msg: "Password must be More Than 5" });
        // ecrypt password
        const passwordHash = await bcrypt.hash(password, 10);
       
        const newUser = new User({
            username, email,age ,gender,address,
          password: passwordHash,
        });
  
        //To Save In DB U Can USed Create But this is anthor way
        await newUser.save();
     
        res.status(200).json({ msg:"created" });
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    },
    login: async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(500).json({ msg: "Enter Valid Email" });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(500).json({ msg: "Incoorect Password" });
        const token=jwt.sign({userID:user._id,name:user.username},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
        console.log(user)
        res.status(200).json({token ,name:user.username,userID:user._id , address:user.address,gender:user.gender,age:user.age ,email:user.email});
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    },
    deleteUser: async (req, res) => {
      try {
        console.log(req.params )
        const user = await User.findOneAndDelete({ _id:req.params.id });
        res.status(200).json({msg:"deleted User"});
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    },
   
  };
  module.exports = userCtrl;
  