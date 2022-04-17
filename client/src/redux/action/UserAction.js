import axios from "axios"
import { message } from "antd"

export const login=(values)=>async dispatch=>{
   
    dispatch({type:"LOADING",payload:true})
    try {
        const response=await axios.post('api/user/login',values)    
        localStorage.setItem("user",JSON.stringify(response.data))
        message.success("Login Success")
        window.location.href="/"
        dispatch({type:"LOADING",payload:false})
    } catch (error) {
        message.error("Something went Wrong")
        dispatch({type:"LOADING",payload:true})

    }
}

export const register=(values)=>async dispatch=>{
    dispatch({type:"LOADING",payload:true})
    try {
        const response=await axios.post('api/user/register',values)
        message.success("Login Success")
        window.location.href="/"
        dispatch({type:"LOADING",payload:false})
    } catch (error) {
        message.error("Something went Wrong")
        dispatch({type:"LOADING",payload:true})

    }
}