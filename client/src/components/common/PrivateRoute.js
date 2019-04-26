import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Proptypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        // sprawdza czy jesteśmy zalogowani
        // jak tak to ładuje komponent
        // jak nie to przekierowuje do logowania
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: Proptypes.object.isRequired
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(PrivateRoute);
