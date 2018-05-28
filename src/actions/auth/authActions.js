import jwtDecode from "jwt-decode";
import * as types from "./types";
import { setAuthToken, apiOni } from "../../utils";
import { TOKEN_NAME } from "../../utils/constants";

export const authRequest = () => {
  return { type: types.AUTH_REQUEST };
};

export const onValidAuth = user => {
  return { type: types.AUTH_SUCCESS, user };
};

export const authFailed = () => {
  return { type: types.AUTH_FAILED };
};

export const login = user => {
  return async dispatch => {
    try {
      dispatch(authRequest());
      const response = await apiOni.post("login", user);
      authUser(response, dispatch);
      return response.data.token;
    } catch (error) {
      dispatch(authFailed());
      throw err;
    }
  };
};

export function noToken() {
  return { type: types.NO_TOKEN };
}

export function clearStore() {
  return { type: types.CLEAR_STORE };
}

export const logout = () => {
  return async dispatch => {
    secApi.get("logout");
    dispatch(noToken());
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem("current_sector");
    localStorage.removeItem("selected_user");
    setAuthToken(false);
    dispatch(clearStore());
  };
};

const authUser = (res, dispatch) => {
  const token = res.data.token;
  localStorage.setItem(TOKEN_NAME, token);
  setAuthToken(token);
  dispatch(onValidAuth(jwtDecode(token)));
};
