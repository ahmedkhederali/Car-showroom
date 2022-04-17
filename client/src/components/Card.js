import React from 'react'
import { Link } from 'react-router-dom'

function Card({car}) {
  //console.log(car)
  return (
    <div className='car p-2 bs1'>
    <img src={car.image} alt="car" className='carImg'/>
    <div className='car-content'>
      <div className='car_desc'>
        <p>{car.name}</p>
        <p> Rent Per Hour<mark>{car.rentPerHour}$</mark> </p>
      </div>

      <div>
        <button>
        <Link to={`booking_car/${car._id}`}>
        Booking Now
        </Link>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Card