import React, { Fragment, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { getAllBooking } from "../redux/action/getAllBooking";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd"; //we divided the design area into 24 sections.
import { getAllCars } from "../redux/action/CarActions";
import Loading from "../components/Loading";
function BookingCar() {
  const { booking } = useSelector((state) => state.bookingReducer);
  const {
    cars: { cars },
  } = useSelector((state) => state.carReducer);
  const { loading } = useSelector((state) => state.alertsReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooking());
  }, []);

  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  console.log(booking);
  return (
    <DefaultLayout>
      <h1 className="text-center mt-3">BookingCar</h1>
      {loading && <Loading />}
      <Row className="mt-3" justify="center">
        <Col lg={20} sm={24}>
          <Row className="row_bookings">
            {booking?.map((e) => (
              <Fragment key={e._id}>
                <Col lg={7} sm={24}>
                  <div>
                    {cars?.map((cs) => {
                      if (e.car === cs._id) {
                        console.log(cs);
                        return (
                          <Fragment key={cs._id}>
                            <p> Car Name : {cs.name}</p>
                            <p> Fuel Type : {cs.fuelType}</p>
                            <p> Rent Per Hour : {cs.rentPerHour}</p>
                            <p> Capacity : {cs.capacity}</p>
                          </Fragment>
                        );
                      }
                    })}
                  </div>
                </Col>

                <Col className="ml-2" lg={7} sm={24}>
                  <p>From : {e.bookedTimeSlots.from}</p>
                  <p>To : {e.bookedTimeSlots.from}</p>
                  <p> Total Amount : {e.totalAmount} $</p>
                  <p> User ID : {e.user}</p>
                </Col>

                <Col lg={7} sm={24}>
                  <div>
                    {cars?.map((cs) => {
                      if (e.car === cs._id) {
                        console.log(cs);
                        return (
                          <Fragment key={cs._id}>
                            <img className="carImg2" src={cs.image} alt="img" />
                          </Fragment>
                        );
                      }
                    })}
                  </div>
                </Col>
              </Fragment>
            ))}
          </Row>
        </Col>
      </Row>
      <br />
    </DefaultLayout>
  );
}

export default BookingCar;
