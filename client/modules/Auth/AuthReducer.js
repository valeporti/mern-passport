// Import Actions
import { SIGN_UP, AUTH_SECTION, LOG_IN } from './AuthActions';

const REGISTER_SECTION = 0;

// Initial State
const initialState = { 
  user:  {
    name: null,
    email: null,
  },
  log_in: false,
  auth_section: REGISTER_SECTION,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGN_UP : 
      return Object.assign({}, state, { user: action.user });
    case LOG_IN : 
      return Object.assign({}, state, { log_in: action.bool, user: action.user });
    case AUTH_SECTION : 
      return Object.assign({}, state, { auth_section: action.auth_section });
    default:
      return state;
  }
};

export default AuthReducer;
