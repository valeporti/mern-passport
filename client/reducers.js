/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import auth from './modules/Auth/AuthReducer';
import home from './modules/Home/HomeReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  auth,
  posts,
  intl,
  home,
});
