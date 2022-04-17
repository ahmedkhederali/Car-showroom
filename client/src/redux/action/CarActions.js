import axios from "axios"

export const getAllCars=()=>async dispatch=>{
    dispatch({type:"LOADING",payload:true})
    try {
        const response=await axios.get('/api/car')
        dispatch({type:"GET_ALL_CAR",payload:response.data})
        dispatch({type:"LOADING",payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type:"LOADING",payload:true})

    }
}