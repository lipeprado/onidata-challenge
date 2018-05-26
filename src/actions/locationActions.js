import * as types from "../actions/actionTypes";

export const getHostLocationRequest = () => {
  return { type: types.GET_LOCATION_REQUEST };
};

export const getHostLocation = host => {
  return async dispatch => {
    try {
      console.log("Teste");
    } catch (error) {
      console.log(error);
    }
  };
};
