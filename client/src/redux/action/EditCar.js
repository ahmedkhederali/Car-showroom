import axios from "axios";
import { message } from "antd";

export const UpdateCar = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/editcar", values);
    message.success("Updated Success");
   window.location.href = "/admin";

    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something went Wrong");
    dispatch({ type: "LOADING", payload: true });
  }
};


