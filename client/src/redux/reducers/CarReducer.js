const initialData={
    cars:[]
}

export const carReducer=(state=initialData,action)=>{
  //  console.log(state)
    switch(action.type){
        case "GET_ALL_CAR" : {
            return{
                ...state,
                cars:action.payload
            }
        }
        default:return state
    }
}