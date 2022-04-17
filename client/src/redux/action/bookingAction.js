import axios from "axios";
import { message } from "antd";

export const booking = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/car/booking_car", values);
    message.success("Booking Success");
    window.location.href = "/booking_car";

    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something went Wrong");
    dispatch({ type: "LOADING", payload: true });
  }
};
