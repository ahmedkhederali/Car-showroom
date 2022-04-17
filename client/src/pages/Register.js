import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Row, Col, InputNumber ,Select} from "antd"; //we divided the design area into 24 sections.
import {register} from "../redux/action/UserAction"
import {useDispatch} from "react-redux"
function Register() {
  const dispatch=useDispatch()

  const onFinish = (values) => {
    console.log(values);
    dispatch(register(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <Row>
        <Col lg={16}>
          <div className="image_logo">
            <img
            data-aos="slide-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
              className="image_login"
              src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            />
            <h1>Carkoooo</h1>
          </div>
        </Col>
        <Col lg={8} className="text-left col_style p-5 ">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="login_form p-5"
            style={{"marginTop":"50px"}}
          >
            <h1>Register</h1>
            <Form.Item
           
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Enter UserName" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{required: true, type: "email" }]}>
              <Input placeholder="Enter Email" />
            </Form.Item>

            <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please input your password!" },]}>
              <Input.Password placeholder="Enter password"/>
            </Form.Item>

           
                <Form.Item
                name="age"
                label="Age"
                rules={[{  required: true ,type: "number", min: 0, max: 99 }]}
              >
                <InputNumber placeholder="Age" />
              </Form.Item>
             
              <Form.Item name="gender" label="Gender" rules={[{ required: true, message: "Please Select Your Gender!" },]}>
              <Select placeholder="Gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="others">Others</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item name="address" label="Address" rules={[{ required: true, message: "Please Select Your Address!" },]}>
            
                <Select placeholder="Select province">
                  <Select.Option value="sersElllyan">Sers Ellyan</Select.Option>
                  <Select.Option value="menouf">Menouf</Select.Option>
                  <Select.Option value="giza">Giza</Select.Option>
                  <Select.Option value="cairo">Cairo</Select.Option>
                </Select>
              </Form.Item>
              

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <button type="submit" className="btn_login">
                Register
              </button>
            </Form.Item>
            <div className="form_descr">
              <span>If You Already Have An Account?</span>
              <Link to="/login">
                <p>Login Now</p>
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
