import axios from "axios";
import { message } from "antd";

export const DeleteCar = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/deletecar",values);
    message.success("Delete Success");
    window.location.reload()

    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something went Wrong");
    dispatch({ type: "LOADING", payload: true });
  }
};


