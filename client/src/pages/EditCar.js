import React, { useEffect, useState } from "react";
import { Form, Input, Col,Row } from 'antd';
import DefaultLayout from "../components/DefaultLayout";
import Loading from '../components/Loading';
import {useSelector,useDispatch} from "react-redux"
import { getAllCars } from "../redux/action/CarActions";
import {UpdateCar} from "../redux/action/EditCar"
import { useParams } from "react-router-dom";
function EditCar() {
    const dispatch = useDispatch();
    const {cars: { cars }, } = useSelector((state) => state.carReducer);
    const{loading}=useSelector(state=>state.alertsReducers) 
    const [car, setCar] = useState({});
    const { id } = useParams();

  console.log(car)

      useEffect(() => {
        if (cars === undefined || cars.length === 0) {
          dispatch(getAllCars());
        } else {
          setCar(cars.find((e) => e._id === id));
        }
      }, [cars]);
    const onFinish = (values) => {
        console.log('Success:', values);
        values._id=car._id
        dispatch(UpdateCar(values))
      };

    const onFinishFailed = (errorInfo) => {
        alert(errorInfo)
      };
  return (
    <DefaultLayout>
    {
        loading && <Loading/>
      }
        <Row justify='center mt-5'>
            <Col lg={12} sm={24}>
               {car.name && ( <Form  initialValues={car} className='bs1 p-2' layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed}>
               <h3>Edit CAR</h3>
                   <Form.Item name="name" label="Car Name" rules={[{required: true}]} >
                      
                       <Input placeholder="Enter Car Name" />
                   </Form.Item>
               
                   <Form.Item name="image" label="Car Image URL" rules={[{required: true}]}>
                       <Input placeholder="Enter Car Name" autoComplete="off"/>
                   </Form.Item>
                   <Form.Item name="rentPerHour" label="RentPerHour" rules={[{required: true}]}>
                       <Input placeholder="Enter Car Name" autoComplete="off"/>
                   </Form.Item>
                   <Form.Item name="capacity" label="Car Capacity" rules={[{required: true}]}>
                       <Input placeholder="Enter Car Name" autoComplete="off"/>
                   </Form.Item>
                   <Form.Item name="fuelType" label="Car Fuel Type" rules={[{required: true}]}>
                       <Input placeholder="Enter Car Name" autoComplete="off"/>
                   </Form.Item>
                   
                   <div className='text-right'>
                    <button className='btn_addcar'>Edit CAR</button>
                   </div>
               </Form>)}
            </Col>
        </Row>
    </DefaultLayout>
  )
}

export default EditCar