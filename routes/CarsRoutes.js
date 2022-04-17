const express=require('express')
const router=express.Router()
const {getCars,createCar,editCar ,deletCar}=require('../controllers/carCtrl')
const {bookingCar}=require('../controllers/bookingCtrl')
router.route('/car').get(getCars).post(createCar).post(editCar)
router.route('/car/booking_car').post(bookingCar)
router.post("/editcar",editCar)
router.post("/deletecar",deletCar)
module.exports = router;  