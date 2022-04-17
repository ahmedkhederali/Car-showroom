import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import {carReducer} from "./reducers/CarReducer"
import { alertsReducers } from './reducers/alertsReducers';
import {bookingReducer} from './reducers/BookingReducer'
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});


// use combine because may have multiple reducer
const rootReducer=combineReducers({
    carReducer,
    alertsReducers,
    bookingReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store