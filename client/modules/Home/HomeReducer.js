// Import Actions
import { TOGGLE_ACTIVE_MENU } from './HomeActions';

// Initial State
const initialState = {
  activeMenu: false,
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE_MENU:
      return { activeMenu: !state.activeMenu };
    default:
      return state;
  }
};

export default HomeReducer;
