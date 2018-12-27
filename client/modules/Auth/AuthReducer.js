// Import Actions
import { SIGN_UP, AUTH_SECTION, LOG_IN, LOG_OUT } from './AuthActions';

const REGISTER_SECTION = 1;

// Initial State
const initialState = { 
  username: null,
  log_in: false,
  auth_section: REGISTER_SECTION,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGN_UP : 
      return Object.assign({}, state, { username: action.username });
    case LOG_IN : 
      return Object.assign({}, state, { log_in: action.bool, username: action.username });
    case AUTH_SECTION : 
      return Object.assign({}, state, { auth_section: action.auth_section });
    case LOG_OUT :
      return Object.assign({}, state, { log_in: action.bool, username: action.username });
    default:
      return state;
  }
};

export default AuthReducer;
