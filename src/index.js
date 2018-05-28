/* eslint-disable */
import "babel-polyfill";
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import { onValidAuth, logout, noToken } from "./actions/auth/authActions";
import { TOKEN_NAME } from "./utils/constants";
import { setAuthToken } from "./utils";

//Main Component
import App from "./components/App";

//Vendor Styles
import "jquery/dist/jquery";
import "css-reset-and-normalize-sass";
import "./static/styles/global.sass";

const store = configureStore();

bootstrap();
function bootstrap() {
  if (localStorage[TOKEN_NAME]) {
    let decodeUser = jwtDecode(localStorage[TOKEN_NAME]);

    // if Token is not valid redirect to '/login'
    let tokenExp = decodeUser.exp;
    if (tokenExp > new Date().getTime()) {
      store.dispatch(noToken());
      store.dispatch(logout());
    }

    // verify if token is valid and search for user in database
    setAuthToken(localStorage[TOKEN_NAME]);
    store.dispatch(onValidAuth(decodeUser));
    store.dispatch(getUserById(decodeUser.id));
  }
}

render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
