import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Row, Col, Table, DatePicker, Checkbox, Modal } from "antd"; //we divided the design area into 24 sections.
import Loading from "../components/Loading";
import { getAllCars } from "../redux/action/CarActions";
import { booking } from "../redux/action/bookingAction";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";

function BookingCarCard() {
  const { RangePicker } = DatePicker;
  const {
    cars: { cars },
  } = useSelector((state) => state.carReducer);
  const { loading } = useSelector((state) => state.alertsReducers);
  const [car, setCar] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setDriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);


  useEffect(() => {
    if (cars === undefined || cars.length === 0) {
      dispatch(getAllCars());
    } else {
      setCar(cars.find((e) => e._id === id));
    }
  }, [cars]);

  useEffect(() => {
    driver
      ? setTotalAmount(car.rentPerHour * totalHours + totalHours * 30)
      : setTotalAmount(totalHours * car.rentPerHour);
  }, [driver, totalHours]);

  const dataSource = [
    {
      key: "1",
      name: car.name,
      fuel: car.fuelType,
      capacity: car.capacity,
      rentPerHour: car.rentPerHour + "$",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Fuel Type",
      dataIndex: "fuel",
      key: "fuel",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "Rent Per Hour",
      dataIndex: "rentPerHour",
      key: "rentPerHour",
    },
  ];

  function onChange(date) {
    // console.log(moment(date[0]).format("MMM DD YYYY HH:mm"));
    // console.log(moment(date[1]).format("MMM DD YYYY HH:mm"));
    if (date) {
      setFrom(moment(date[0]).format("MMM DD YYYY HH:mm"));
      setTo(moment(date[1]).format("MMM DD YYYY HH:mm"));
      setTotalHours(date[1].diff(date[0], "hours"));
    } else {
      return;
    }
  }


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onToken(token) {
    console.log(token);
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem("user")).userID,
      car: car._id,
      totalAmount,
      totalHours,
      driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };
    console.log(reqObj);
     dispatch(booking(reqObj));
  }
  return (
    <DefaultLayout>
      {loading && <Loading />}
      <Row
        justify="center"
        gutter={16}
        className=" m-2 mt-5"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24} className="">
          <img src={car.image} alt="" className="imgCar2" />
        </Col>
        <Col lg={10} sm={24} xs={24}>
          <h1 className="text-center mb-4">Car Information</h1>
          <Table dataSource={dataSource} columns={columns} />
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD YYYY HH:mm"
            onChange={onChange}
          />
          <br />
          <button
            className="btn_bokking mt-2"
            onClick={() => setIsModalVisible(true)}
          >
            Show
          </button>
          {from && to && (
            <>
              <div className="text-right">
                <p className="totalPerHour">ToTal Hours: {totalHours}</p>
                <p className="totalPerHour">
                  Rent Per Hour: {car.rentPerHour * totalHours} $
                </p>
                <Checkbox
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDriver(true);
                    } else {
                      setDriver(false);
                    }
                  }}
                >
                  Driver
                </Checkbox>
                <p className="totalPerHour">ToTal Amount: {totalAmount}</p>
              </div>
              <StripeCheckout
                amount={totalAmount * 100}
                shippingAddress
                token={onToken}
                currency='USD'
                stripeKey="pk_test_51KfhXZHSobqaG5Hhg9QYpAN4mqFZw4AWJqffY5bSzhjqMBJjKR8pH82ar2WZqdrBQU1idFaEq0T42tGdXCzD9RKI00EauNycn5"
              >
                {" "}
                <button className="btn_bokking">Booking Now</button>
              </StripeCheckout>
            </>
          )}
        </Col>
      </Row>
      <Modal
        title="Show Time Slots"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {car && (
          <div>
            {
              <div>
                {car.bookTimeSlots?.map((e, i) => (
                  <p key={i}>
                    Slot{i + 1} : {e.from}-{e.to}{" "}
                  </p>
                ))}
              </div>
            }
          </div>
        )}
      </Modal>
    </DefaultLayout>
  );
}

export default BookingCarCard;
