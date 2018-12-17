// Import Actions
import { SIGN_UP } from './AuthActions';

// Initial State
const initialState = { 
  user:  {
    name: null,
    email: null,
    password: null,
  }
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGN_UP : 
      return Object.assign({}, state, state.user = action.user);

    default:
      return state;
  }
};

export default AuthReducer;
