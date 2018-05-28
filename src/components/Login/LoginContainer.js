import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import LoginForm from "./LoginForm";

//Styles
import styles from "./styles.sass";

// Logo
import logo from "../../static/images/logo.png";

class LoginContainer extends Component {
  render() {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.wrapper}>
          <img className={styles.logo} src={logo} alt="Logo Onidata" />
          <LoginForm />
        </div>
      </div>
    );
  }
}

LoginContainer.propTypes = {};

export default LoginContainer;
