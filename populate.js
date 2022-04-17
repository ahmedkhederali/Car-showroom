
require('dotenv').config()
const connectDB = require('./db/connect')
const car = require('./models/Car')

const jsoncars = require('./cars.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    await car.deleteMany()// علشان امسح كل الموجود واضيف اللي عاوزه بس لو شلتها هضيف علي الموجود
    await car.create(jsoncars)
    console.log('Success!!!!')
    process.exit(0) //meanning everything went Well  and exist the program 
  } catch (error) {
    console.log(error)
    process.exit(1)//  
  }
}

start()