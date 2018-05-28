import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Components
import Login from "./Login/LoginContainer";
import Welcome from "./Welcome/WelcomeContainer";

// ROUTE TYPE
import UserRoute from "./Routes/AuthRoute";
import GuestRoute from "./Routes/GuestRoute";

// Actions
import * as authActions from "../actions/auth/authActions";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      current_user: {}
    };
  }

  render() {
    const { location } = this.props;
    return (
      <section>
        <GuestRoute location={location} path="/login" component={Login} />
        <section>
          <UserRoute location={location} exact path="/" component={Welcome} />
        </section>
      </section>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAuthenticating: PropTypes.bool.isRequired,
  current_user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAuthenticating: state.auth.isAuthenticating,
    current_user: state.auth.auth_user || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, authActions), dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
