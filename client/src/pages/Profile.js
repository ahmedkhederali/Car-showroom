import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Row, Col, DatePicker } from "antd"; //we divided the design area into 24 sections.
import { Link } from "react-router-dom";
import axios from 'axios'
function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const deleteUser=async (values)=>{
   await axios.post(`/api/user/deleteuser/${values}`)
   window.location.href="/login"
   console.log(values)
  }
  console.log(user);
  return (
    <>
      <DefaultLayout>
        <Row justify="center" gutter={16} className=" m-2 ">
          <div class="profile resposive">
            <div class="profile-header">
              <div class="profile-info">
                <div class="profile-img">
                  <img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />
                  <span class="status active"></span>
                  <p class="profile-username">
                   {user.name} <span class="fa fa-star checked"></span>
                </p>
                </div>
                <div class="actions">
                  <Link>
                  <button class="btn-success">
                  <i class="fa fa-plus"></i> Edit
                </button>
                  </Link>
                  <Link to="/booking_car">
                    {" "}
                    <button class="">
                      <i class="fa fa-share-alt"></i> Reservations
                    </button>
                  </Link>
                  
                    <button class="profile_delete" onClick={()=>{deleteUser(user.userID)}}>
                      <i class="fa fa-share-alt"></i> Delete
                    </button>
                  
                </div>

               
              </div>
            </div>
            <div class="profile-content"></div>
          </div>
        </Row>
      </DefaultLayout>
    </>
  );
}

export default Profile;
