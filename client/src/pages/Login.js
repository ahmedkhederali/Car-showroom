import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Row, Col, Checkbox, Button } from "antd"; //we divided the design area into 24 sections.
import Loading from '../components/Loading';
import { login } from "../redux/action/UserAction";
import { useDispatch,useSelector } from "react-redux";

// AOS => Animation On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

function Login() {
  const dispatch = useDispatch();
  const{loading}=useSelector(state=>state.alertsReducers) 
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(login(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
    {
      loading && <Loading/>
    }
      <Row>
        <Col lg={16}>
          <div className="image_logo">
            <img
      
            data-aos="slide-right"
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
      >
            <h1>Login</h1>

            <Form.Item name="email" label="Email" rules={[{required: true, type: "email" }]}>
              <Input placeholder="Enter Email" />
            </Form.Item>
           

            <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please input your password!" },]}>
            <Input.Password placeholder="Enter password"/>
          </Form.Item>
            
    

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <button type="submit" className="btn_login">
                Login
              </button>
            </Form.Item>
            <div className="form_descr">
              <span>Don't have an account?</span>
              <Link to="/register">
                <p>Register Now</p>
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
