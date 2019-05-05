// import Immutable from "immutable";
import { SET_USER_PROFILE } from "../actions/actionTypes";

const initialState = {
  profile: {
    name: "Petr Dudka"
  }
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return state;
    default:
      return state;
  }
};

export default profileReducer;
