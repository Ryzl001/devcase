import axios from "axios";
import history from "../history";
import { GET_ERRORS } from "./types";

export const registerUser = userData => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
