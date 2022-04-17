const initialData={
    booking:[]
}

export const bookingReducer=(state=initialData,action)=>{
   //console.log(state)
    switch(action.type){
        case "GET_ALL_BOOKING" : {
            return{
                ...state,
                booking:action.payload
            }
        }
        default:return state
    }
}