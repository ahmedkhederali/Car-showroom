const express=require('express')
const router=express.Router()
const {getAllBooking}=require('../controllers/bookingCtrl')
router.route('/getAllBooking').get(getAllBooking)
module.exports = router;  