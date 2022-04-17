import axios from "axios"

export const getAllBooking=()=>async dispatch=>{
    dispatch({type:"LOADING",payload:true})
    try {
        const response=await axios.get('/api/booking/getAllBooking')
        //console.log(response.data)
        dispatch({type:"GET_ALL_BOOKING",payload:response.data})
        dispatch({type:"LOADING",payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type:"LOADING",payload:true})

    }
}