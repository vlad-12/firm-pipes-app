// import Immutable from "immutable";
import {
  SET_CURRENT_SCREEN,
  SET_CURRENT_SIDEBAR_SCREEN
} from "../actions/actionTypes";

const initialState = {
  screenName: "Today",
  sidebarScreen: "Today"
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SCREEN:
      // alert(action.screen);
      return {
        ...state,
        screenName: action.screen
      };
    case SET_CURRENT_SIDEBAR_SCREEN:
      return {
        ...state,
        screenName: action.sidebarScreen
      };
    default:
      return state;
  }
};

export default navigationReducer;
