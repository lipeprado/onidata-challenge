import { combineReducers } from "redux";
import location from "./locationReducer";

const appReducer = combineReducers({
  location
});

export default appReducer;
