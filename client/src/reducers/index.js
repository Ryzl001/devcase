import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import userReducer from "./userReducer";
// import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  form: formReducer,
  auth: userReducer,
  errors: errorReducer
});
