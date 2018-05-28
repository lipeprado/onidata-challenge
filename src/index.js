/* eslint-disable */
import "babel-polyfill";
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import jwtDecode from "jwt-decode";
import { BrowserRouter, Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import { onValidAuth, logout, noToken } from "./actions/auth/authActions";
import { TOKEN_NAME } from "./utils/constants";
import { setAuthToken } from "./utils";
import toastr from "toastr";

//Main Component
import App from "./components/App";

//Vendor Styles
import "jquery/dist/jquery";
import "toastr/build/toastr.css";
import "font-awesome/css/font-awesome.css";
import "css-reset-and-normalize-sass";
import "./static/styles/global.sass";

const store = configureStore();

bootstrap();
function bootstrap() {
  if (localStorage[TOKEN_NAME]) {
    let user = localStorage.getItem("TOKEN_NAME");
    let decodeUser = jwtDecode(user);

    // if Token is not valid redirect to '/login'
    let tokenExp = decodeUser.exp;
    if (tokenExp > new Date().getTime()) {
      store.dispatch(noToken());
      store.dispatch(logout());
    }

    // verify if token is valid and search for user in database
    setAuthToken(localStorage[TOKEN_NAME]);
    store.dispatch(onValidAuth(decodeUser));
  }
}

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-right",
  preventDuplicates: true,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut"
};

render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
