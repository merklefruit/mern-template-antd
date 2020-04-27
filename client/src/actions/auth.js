import axios from "axios";
import { USERS_URL } from "../helpers/config";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

// Register User
export const register = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const registerUrl = USERS_URL + "/register";
    const res = await axios.post(registerUrl, body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    // °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    const error = res.message;
    console.log(error); // CAMBIARE CON ALERT ACTION!!!!!!!!!!!!!!!
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
