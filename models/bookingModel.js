const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectID,ref:'users'},
    car:{type:mongoose.Schema.Types.ObjectID,ref:'cars'},
    bookedTimeSlots:{
        from:{type:String,}, 
        to:{type:String}
    },
    totalAmount:{
        type:Number,
        
    },
    totalHours:{
        type:Number,
        
    },
    // For Payment
    transactionID:{
        type:String
    },
    driver:{
        type:Boolean,
        default:false
    }
   
},{timestamps:true})

module.exports = mongoose.model("Book", BookingSchema);