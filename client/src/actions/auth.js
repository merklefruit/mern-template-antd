import axios from "axios";
import { setAlert } from "./alert";
import { USERS_URL } from "../helpers/config";
import setAuthToken from "../helpers/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
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
    dispatch(loadUser());
  } catch (err) {
    const error = err.response.data.message;
    dispatch(setAlert(error, "", "error"));
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const loginUrl = USERS_URL + "/authenticate";
    const res = await axios.post(loginUrl, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const error = err.response.data.message;
    dispatch(setAlert(error, "", "error"));
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout User
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
