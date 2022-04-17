require('dotenv').config()
const express= require('express')
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const PORT=process.env.PORT || 5000
const app=express()
app.use(express.static("./client/build"));
app.use(express.json());
const cors = require("cors");
const path=require('path')
app.use(cors());
app.get('/',(req,res)=>{
    res.send("Home Of Backend")
})

app.use("/api", require("./routes/CarsRoutes"))
app.use("/api/user", require("./routes/UserRoutes"))
app.use("/api/booking", require("./routes/BookingRoute"))


//to upload project

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'))
  })
}
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URL);
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
  
