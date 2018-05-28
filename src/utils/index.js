import axios from "axios";
import { API_ONI } from "../utils/constants";

export const setAxiosDefaults = () => {
  axios.defaults.headers.common["Content-Type"] =
    "application/json; charset=utf-8";
};

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const clearAxiosDefaults = () => {
  axios.defaults.headers.common["Content-Type"] = "";
  axios.defaults.baseURL = "";
};

export const apiOni = axios.create({
  baseURL: `${API_ONI}/`
});
