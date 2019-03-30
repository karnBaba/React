import { userConstants } from '../actions/constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState =  {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST || userConstants.LOGIN_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}