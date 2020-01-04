import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../actions/";

export default (
  state = {
    isRegistering: false,
    registerError: false,
    isRegistered: false,
    user: {}

  }, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isRegistering: true,
        registerError: false,
        isRegistered: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        registerError: false,
        isRegistered: true,
        user: action.user
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        isRegistered: false,
        registerError: true
      };
    default:
      return state;
  }
}