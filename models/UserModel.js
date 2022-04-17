const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required:true,
    tirm:true
  },
  email: {
    type: String,
    tirm: true,
    unique:true,
    
  },
  password: {
    type: String,
    required:true
  },
  age:{
      type:Number,
      required:true
  },
  gender:{
      type:String,
      required:true
  },
  address:{
    type:String,
    required:true
}
},{timestamps:true});
module.exports = mongoose.model("User", UserSchema);
