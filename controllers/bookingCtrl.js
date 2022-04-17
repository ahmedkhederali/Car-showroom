const Booking = require("../models/bookingModel");
const Car = require("../models/Car");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51KfhXZHSobqaG5HhBQEmdjsPnwW3nHbpcSPxqfAizMxhlolgXXxVCORbSqIHiqrghDUyfVazSsLJOBYvKlN2kZve00XlHkPybX"
);
const bookingCar = async (req, res) => {
  const { token } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: req.body.totalAmount * 100,
        currency:'USD',
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      // this is a default value using in section payment 
      // inside payment object called source
      
      //console.log(payment)
      req.body.transactionID = payment.source.id;
      const Book = new Booking(req.body);
      //To Save In DB U Can USed Create But this is anthor way
      await Book.save();
      // speacial for timeSlots
      const car = await Car.findOne({ _id: req.body.car });
      car.bookTimeSlots.push(req.body.bookedTimeSlots);
      await car.save();

      res.status(200).json({ msg: "Booked" });
    } else {
      return res.status(500).json({ msg: error.message });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getAllBooking = async (req, res) => {
try {
  
  const response=await Booking.find()
  res.status(200).json(response)
} catch (error) {
  return res.status(400).json({msg:error.message})
}
}
module.exports = { bookingCar,getAllBooking };
