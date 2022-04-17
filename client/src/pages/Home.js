import React, { useEffect, useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {useSelector,useDispatch} from "react-redux"
import {getAllCars} from "../redux/action/CarActions"
import {Row,Col,DatePicker } from 'antd';  //we divided the design area into 24 sections.
import Loading from '../components/Loading';
import Card from '../components/Card';
import moment from "moment";
function Home() {
  const { RangePicker } = DatePicker;
  // How To Get data Of State In Redux
  const{cars:{cars}}=useSelector(state=>state.carReducer) 
  const{loading}=useSelector(state=>state.alertsReducers) 
  const dispatch=useDispatch()
  const [totalCars,setToalCars]=useState([]);


  useEffect(()=>{
    dispatch(getAllCars())
  },[])

  // to listen to changes
  useEffect(()=>{
    setToalCars(cars)
  },[cars])

  
  function onChange(date) {
    if(date){
    var selectedFrom=moment(date[0],"MMM DD YYYY HH:mm")
    var selectedTo=moment(date[1],"MMM DD YYYY HH:mm")  
    var tem=[];

    for(var car of cars ){
      if(car.bookTimeSlots.length===0){
        tem.push(car)
      }else{
        for(var booking of car.bookTimeSlots){
          // This condition is return not avaliable car من الاخر ده علشان اعرف كل العربيات الغير متاحة 

          if(selectedFrom.isBetween(booking.from,booking.to) || 
          selectedTo.isBetween(booking.from,booking.to) || 
          moment(booking.from).isBetween(selectedFrom,selectedTo) ||
          moment(booking.to).isBetween(selectedFrom,selectedTo)){
            console.log("Empty")
          }else{
            tem.push(car)
          }
        }
      }
    }
    setToalCars(tem)
  }
  else{
    setToalCars(cars)
  }
  }

  //gutter={16} to make space=16px between columns
  return (
    <DefaultLayout>
    <Row className='mt-3' justify='center'>
      <Col lg={20} sm={24} className="d-flex justify-content-left">
        <RangePicker
        showTime={{ format: "HH:mm" }}
        format="MMM DD YYYY HH:mm"
        onChange={onChange}
      />
      </Col>
    </Row>
    
    {
      loading && <Loading/>
    }
      <Row justify='center' gutter={16} className=" m-2 ">
        {
          totalCars&& totalCars.map(car=>{
            return <Col key={car._id} lg={5} sm={12} xs={24} md={8}>
             <Card car={car}/>
            </Col>
          })
        }
      </Row>
      
    </DefaultLayout>
  )
}

export default Home