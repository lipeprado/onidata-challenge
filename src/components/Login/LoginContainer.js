import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import toastr from "toastr";

// Actions
import * as authActions from "../../actions/auth/authActions";

// Components
import LoginForm from "./LoginForm";

//Styles
import styles from "./styles.sass";

// Logo
import logo from "../../static/images/logo.png";

export class LoginContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      auth: {
        username: "",
        password: ""
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    const { auth } = this.state;
    auth[name] = value;
    this.setState({
      auth
    });
  }

  onSubmit() {
    const { auth } = this.state;
    const { actions } = this.props;
    if (!auth.password || !auth.username) {
      toastr.error("Por favor, verifique os campos");
      return;
    }
    actions
      .login(auth)
      .then(() => {
        toastr.success("Bem vindo ao nosso Sistema");
      })
      .catch(error => {
        const err = error.error.response.data.non_field_errors[0];
        toastr.error(err);
      });
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className={styles.loginContainer}>
        <div className={styles.wrapper}>
          <img className={styles.logo} src={logo} alt="Logo Onidata" />
          <LoginForm
            isLoading={isLoading}
            onChange={this.handleInputChange}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

LoginContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isAuthenticating
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
