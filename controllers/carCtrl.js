const Car = require("../models/Car");

const getCars= async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({
      status: "Success",
      count: cars.length,
      cars,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createCar= async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


const editCar= async (req, res) => {
  try {
    const car = await Car.findOne({_id:req.body._id})
    car.name=req.body.name;
     car.image=req.body.image;
     car.rentPerHour=req.body.rentPerHour;
     car.fuelType=req.body.fuelType;
     car.capacity=req.body.capacity;
     await car.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deletCar= async (req, res) => {
  try {
    console.log(req.body.carid)
    const car = await Car.findOneAndDelete({_id:req.body.carid})
    res.status(200).json({
      status: "Deleted Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = {deletCar,getCars,createCar,editCar}
