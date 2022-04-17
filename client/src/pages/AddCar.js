import React from 'react';
import { Form, Input, Col,Row } from 'antd';
import DefaultLayout from "../components/DefaultLayout";
import Loading from '../components/Loading';
import {useSelector,useDispatch} from "react-redux"
import {AddNewCar} from "../redux/action/AddNewCar"
function AddCar() {
    const dispatch = useDispatch();
    const{loading}=useSelector(state=>state.alertsReducers) 
    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(AddNewCar(values))
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
                <Form className='bs1 p-2' layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <h3>ADD NEW CAR</h3>
                    <Form.Item name="name" label="Car Name" rules={[{required: true}]}>
                        <Input placeholder="Enter Car Name" autoComplete="off"/>
                    </Form.Item>
                    <Form.Item name="image" label="Car Image URL" rules={[{required: true}]}>
                        <Input placeholder="Enter Car Name" autoComplete="off" />
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
                     <button className='btn_addcar'>ADD CAR</button>
                    </div>
                </Form>
            </Col>
        </Row>
    </DefaultLayout>
  )
}

export default AddCar