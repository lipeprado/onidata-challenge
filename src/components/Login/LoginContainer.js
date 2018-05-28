import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import LoginForm from "./LoginForm";

//Styles
import styles from "./styles.sass";

// Logo
import logo from "../../static/images/logo.png";

class LoginContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange() {
    return "teste";
  }

  onSubmit() {
    console.log("Called");
  }

  render() {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.wrapper}>
          <img className={styles.logo} src={logo} alt="Logo Onidata" />
          <LoginForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

LoginContainer.propTypes = {};

export default LoginContainer;
