import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import history from "../../history";
import { loginUser } from "../../actions/authActions";
import { renderInput } from '../common/RenderInput.js'

class LoginForm extends Component {
  state = {
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = formValues => {
    this.props.loginUser(formValues);
    // console.log(this.props);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  // console.log(state);
  return { auth: state.auth, errors: state.errors };
};

const formWrapped = reduxForm({
  // nazwa formularza
  form: "login"
})(LoginForm);

export default connect(
  mapStateToProps,
  { loginUser }
)(formWrapped);
