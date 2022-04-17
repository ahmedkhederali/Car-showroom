const initialData={
    loading:false
}

export const alertsReducers=(state=initialData,action)=>{
    switch(action.type){
        case 'LOADING':{
            return{
                ...state,
                loading:action.payload
            }
        }
        default:return state
    }
}