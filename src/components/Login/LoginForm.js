import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";

// Styles
import styles from "./styles.sass";

export const LoginForm = ({ onSubmit, onChange, isLoading }) => {
  return (
    <div className={styles.wrapper_form}>
      <input
        className={styles.input_username}
        name="username"
        onChange={onChange}
        type="text"
        placeholder="Please insert your username"
      />
      <input
        className={styles.input_password}
        onChange={onChange}
        name="password"
        type="password"
        placeholder="Please insert your password"
      />
      <button className={styles.input_submit} onClick={onSubmit}>
        {isLoading ? (
          <div>
            <FontAwesome name="spinner" spin /> Autenticando{" "}
          </div>
        ) : (
          "Acessar Sistemas"
        )}
      </button>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

export default LoginForm;
