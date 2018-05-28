import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import FontAwesome from "react-fontawesome";

// Styles
import styles from "./styles.sass";

// Actions
import * as authActions from "../../actions/auth/authActions";

class WelcomeContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    const { actions } = this.props;
    actions.logout();
  }

  render() {
    const { current_user } = this.props;
    const date = moment.unix(current_user.exp).format("DD/MM/YYYY");

    return (
      <div className={styles.wrapper}>
        <span onClick={this.onLogout} className={styles.logout}>
          Sair
          <FontAwesome className={styles.icon} name="sign-out" />
        </span>

        <h1>{`Olá, ${current_user.username}`}</h1>
        <h3 className={styles.welcomeHeader}>Bem Vindo ao Sistema Onidata</h3>
        <div className={styles.userInfo}>
          <h2>{current_user.email}</h2>
          <FontAwesome name="arrow-down" />
          <h5
            className={styles.token}
          >{`A validade do seu Token é até ${date}`}</h5>
        </div>
      </div>
    );
  }
}

WelcomeContainer.propTypes = {
  current_user: PropTypes.object,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    current_user: state.auth.auth_user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
