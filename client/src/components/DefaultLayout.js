import React from 'react'
import { Menu, Dropdown, Button, Row, Col } from 'antd';
import Icon, { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function DefaultLayout({children}) {
  const user =JSON.parse(localStorage.getItem("user"))

  const logout=()=>{
    localStorage.removeItem("user")
  }
//  console.log(user.name)
  const menu = (
    <Menu>
    <Menu.Item>
        <Link to="/">
         Home
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/booking_car">
         Booking
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/admin">
         ADMIN
        </Link>
      </Menu.Item>
      <Menu.Item>
      <Link to="/profile">
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item>
      <Link to="/login" onClick={logout}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
        <div className="header bs1 p-2 m-auto">
            <Row gutter={16} justify="center">
              <Col lg={20} sm={24} xs={24}>
              <div className='d-flex justify-content-between' >
              <h1><Link to="/">Cars</Link></h1>
              <Dropdown overlay={menu} placement="bottomLeft">
              <Button className='btn_user'><UserOutlined />{user.name}</Button>
            </Dropdown>
          </div>
              </Col>
            </Row>
        </div>
        <div className="content">
                {children}
        </div>
    </div>
  )
}

export default DefaultLayout