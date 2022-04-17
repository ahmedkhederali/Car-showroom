import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/action/CarActions";
import { Row, Col, DatePicker } from "antd"; //we divided the design area into 24 sections.
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
import { DeleteCar } from "../redux/action/DeleteCar";
function AdminHome() {
  const { RangePicker } = DatePicker;
  // How To Get data Of State In Redux
  const {
    cars: { cars },
  } = useSelector((state) => state.carReducer);
  const { loading } = useSelector((state) => state.alertsReducers);
  const dispatch = useDispatch();
  const [totalCars, setToalCars] = useState([]);

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  // to listen to changes
  useEffect(() => {
    setToalCars(cars);
  }, [cars]);

  function cancel(e) {
    console.log(e);
    message.error("Car didn't delete");
  }

  //gutter={16} to make space=16px between columns
  return (
    <DefaultLayout>
      <Row justify="center" gutter={16} className=" mt-2 ">
        <Col lg={20} sm={24}>
          <div className="text-left">
            <Link to="/addcar">
              {" "}
              <button className="btn_bokking">ADD CAR </button>
            </Link>
          </div>
        </Col>
      </Row>
      {loading && <Loading />}
      <Row justify="center" gutter={16} className="">
        {totalCars &&
          totalCars.map((car) => {
            return (
              <Col key={car._id} lg={5} sm={12} xs={24} md={8}>
                <div className="car p-2 bs1">
                  <img src={car.image} alt="car" className="carImg" />
                  <div className="car-content">
                    <div className="car_desc">
                      <p>{car.name}</p>
                      <p>
                        {" "}
                        <mark>{car.rentPerHour}$</mark> Rent Per Hour
                      </p>
                    </div>
                    <div className="mr-2">
                      <Link to={`/editcar/${car._id}`}>
                        {" "}
                        <EditOutlined className="mr-3" />
                      </Link>
                      <Popconfirm
                        title="Are you sure to delete this Car?"
                        onConfirm={() => {
                          dispatch(DeleteCar({ carid: car._id }));
                        }}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <DeleteOutlined />
                      </Popconfirm>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </DefaultLayout>
  );
}

export default AdminHome;
