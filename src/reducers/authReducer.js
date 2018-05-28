import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function(state = initialState.location, action) {
  switch (action.type) {
    case types.AUTH_REQUEST:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
