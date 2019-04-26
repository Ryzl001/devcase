import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});
