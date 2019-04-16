import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { loginUser } from "../../actions";

class LoginForm extends Component {
  renderInput = formProps => {
    // console.log(formProps);
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input
          // wykorzystujemy właściwości formProps
          onChange={formProps.input.onChange}
          value={formProps.input.value}
        />
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.loginUser(formValues);
  };
  render() {
    console.log(this.props);
    const { auth } = this.props;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md8 m-auto">
              <h1 className="display-4 text-center">SignUp</h1>
              <p className="lead text-center">Login</p>
              <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form"
              >
                <div className="ui field">
                  <Field
                    name="email"
                    component={this.renderInput}
                    label="Email:"
                  />
                  <div style={{ color: "red" }}>
                    {auth.errors ? auth.errors.email : ""}
                  </div>
                </div>
                <div className="ui field">
                  <Field
                    name="password"
                    component={this.renderInput}
                    label="Password:"
                  />
                  <div style={{ color: "red" }}>
                    {auth.errors ? auth.errors.password : ""}
                  </div>
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

// console.log(this.props);

const mapStateToProps = state => {
  console.log(state);
  return { auth: state.auth };
};

const formWrapped = reduxForm({
  // nazwa formularza
  form: "login"
})(LoginForm);

export default connect(
  mapStateToProps,
  { loginUser }
)(formWrapped);
