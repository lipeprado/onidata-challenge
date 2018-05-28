import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "./styles.sass";

const LoginForm = ({ onSubmit }) => {
  return (
    <div className={styles.wrapper_form}>
      <input
        className={styles.input_username}
        name="username"
        type="text"
        placeholder="Please insert your username"
      />
      <input
        className={styles.input_password}
        name="password"
        type="password"
        placeholder="Please insert your password"
      />
      <button className={styles.input_submit} onClick={onSubmit}>
        Login
      </button>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func
};

export default LoginForm;
