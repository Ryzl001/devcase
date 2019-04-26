import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import history from "../../history";

import { registerUser } from "../../actions/authActions";
import { renderInput } from '../common/RenderInput'

class RegisterForm extends Component {
  state = {
    errors: {}
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

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
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">SignUp</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="form-group">
                  <Field
                    placeholder="Name"
                    name="name"
                    component={renderInput}
                    error={errors.name}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <Field
                    placeholder="Email"
                    name="email"
                    component={renderInput}
                    error={errors.email}
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
                    type="password"
                    placeholder="Password"
                    name="password"
                    component={renderInput}
                    error={errors.password}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <Field
                    type="password2"
                    placeholder="Confirm Password"
                    name="password2"
                    component={renderInput}
                    error={errors.password2}
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

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

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
