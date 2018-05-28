import React, { Component } from "react";
import PropTypes from "prop-types";

//Styles
import styles from "./styles.sass";

class LoginContainer extends Component {
  render() {
    return (
      <div className={styles.loginContainer}>
        <h1>Login</h1>
      </div>
    );
  }
}

LoginContainer.propTypes = {};

export default LoginContainer;
