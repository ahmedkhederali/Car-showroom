const mongoose = require("mongoose");
const CarSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    image:{
        type:String,
        trim:true,
        required:true
    },
    rentPerHour:{
        type:Number,
        trim:true,
        required:true
    },
    fuelType:{
        type:String,
        trim:true,
        required:true
    },
    bookTimeSlots:{
        type:Array,
        trim:true,
        required:true
    },
    capacity:{
        type:Number,
        trim:true,
        required:true
    },
},{timestamps:true})

module.exports = mongoose.model("Car", CarSchema);