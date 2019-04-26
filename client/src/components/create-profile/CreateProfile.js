import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CreateProfile extends Component {
  render() {
    return <div>Create Profile</div>;
  }
}

CreateProfile.propTypes = {};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    errors: state.errors
  };
};

export default connect(null)(CreateProfile);
