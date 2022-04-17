import axios from "axios";
import { message } from "antd";

export const AddNewCar = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/car", values);
    message.success("Booking Success");
    window.location.href = "/admin";

    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something went Wrong");
    dispatch({ type: "LOADING", payload: true });
  }
};


