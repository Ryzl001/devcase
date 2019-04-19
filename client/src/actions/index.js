// import api from "../apis/api";
import axios from "axios";
import history from "../history";

export const registerUser = formValues => dispatch => {
  axios
    .post("/api/users/register", formValues)
    .then(res => history.push("/login"))
    .catch(err => {
      history.push("/login");
      dispatch({
        type: "REGISTER_USER",
        payload: err.response
      });
    });
};

export const loginUser = formValues => dispatch => {
  axios
    .post("/api/users/login", formValues)
    .then(res =>
      dispatch({
        type: "LOGIN_USER",
        payload: { ...res.data, message: "User Logged in", statusText: "OK" }
      })
    )
    .catch(err =>
      dispatch({
        type: "LOGIN_USER",
        payload: err.response
      })
    );
};
