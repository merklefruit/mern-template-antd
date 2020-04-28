import axios from "axios";
import { setAlert } from "./alert";
import { USERS_URL } from "../helpers/config";
import setAuthToken from "../helpers/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from "./types";

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const loadUrl = USERS_URL + "/current";
    const res = await axios.get(loadUrl);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    console.error("ERROR: " + error.response.data.message);
    dispatch({
      type: AUTH_ERROR
    });
  }
};

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
  } catch (err) {
    const error = err.response.data.message;
    dispatch(setAlert(error, "", "error"));
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
