import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

// Set an Alert
export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};
