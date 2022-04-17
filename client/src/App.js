import './App.css';
import {BrowserRouter as Router , Redirect, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import BookingCar from "./pages/BookingCar"
import BookingCarCard from './pages/BookingCarCard';
import 'antd/dist/antd.css'; // from this site https://ant.design/docs/react/introduce
import Profile from './pages/Profile';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
function App() {
  return (
    <div className="App">
    
      <Router>
        <ProductRoute path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <ProductRoute path="/booking_car" exact component={BookingCar}/>
        <ProductRoute path="/profile" exact component={Profile}/>
        <ProductRoute path="/booking_car/:id" exact component={BookingCarCard}/>
        <ProductRoute path="/addcar" exact component={AddCar}/>
        <ProductRoute path="/admin" exact component={AdminHome}/>
        <ProductRoute path="/editcar/:id" exact component={EditCar}/>
      </Router>
    </div>
  );
}

export default App;


export function ProductRoute(props){
  if(localStorage.getItem("user")){
    return <Route {...props}/>
  }else{
    return <Redirect to="/login"/>
  }
}
