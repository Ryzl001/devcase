import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import classnames from "classnames";

import { registerUser } from "../../actions/authActions";

class RegisterForm extends Component {
  state = {
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  renderInput = formProps => {
    // console.log(formProps);
    return (
      <>
        <input
          placeholder={formProps.placeholder}
          className={formProps.className}
          // wykorzystujemy właściwości formProps
          onChange={formProps.input.onChange}
          value={formProps.input.value}
        />
      </>
    );
  };

  onSubmit = formValues => {
    this.props.registerUser(formValues);
    // console.log(this.props);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md8 m-auto">
              <h1 className="display-4 text-center">SignUp</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="form-group">
                  <Field
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    component={this.renderInput}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <Field
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email"
                    name="email"
                    component={this.renderInput}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <Field
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    component={this.renderInput}
                    label="Password:"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <Field
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password2
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    component={this.renderInput}
                    label="Confirm Password:"
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
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
  // console.log(state);
  return { auth: state.auth, errors: state.errors };
};

const formWrapped = reduxForm({
  // nazwa formularza
  form: "register"
})(RegisterForm);

export default connect(
  mapStateToProps,
  { registerUser }
)(formWrapped);
