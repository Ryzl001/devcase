import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Register extends Component {
  render() {
    return (
      <form>
        <Field />
      </form>
    );
  }
}
export default reduxForm({
  // nazwa formularza
  form: "register"
})(Register);
