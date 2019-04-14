import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Register extends Component {
  renderInput(formProps) {
    return (
      <div>
        <label>{formProps.label}</label>
        <input
          // wykorzystujemy właściwości formProps
          onChange={formProps.input.onChange}
          value={formProps.input.value}
        />
      </div>
    );
  }
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md8 m-auto">
              <h1 className="display-4 text-center">SignUp</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form className="ui form">
                <div className="field">
                  <Field
                    name="name"
                    component={this.renderInput}
                    label="Name:"
                  />
                </div>
                <div className="ui field">
                  <Field
                    name="email"
                    component={this.renderInput}
                    label="Email:"
                  />
                </div>
                <div className="ui field">
                  <Field
                    name="password"
                    component={this.renderInput}
                    label="Password:"
                  />
                </div>
                <div className="ui field">
                  <Field
                    name="password2"
                    component={this.renderInput}
                    label="Confirm Password:"
                  />
                </div>
                <button className="ui button primary right floated">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default reduxForm({
  // nazwa formularza
  form: "register"
})(Register);
