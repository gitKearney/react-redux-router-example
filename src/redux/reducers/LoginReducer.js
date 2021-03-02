import {LOGIN_SUCCESS} from "../types";

const initialState = {
  is_auth: false,
};

export function loginReducer(state=initialState, action) {
  const newState = {...state};
  const {payload, type} = action;

  switch(type) {
    case LOGIN_SUCCESS:
      newState.is_auth = true;
      break;
    default: // LOGIN_FAILED is the default state
      newState.is_auth = false;
      break;
  }

  return newState;
}
