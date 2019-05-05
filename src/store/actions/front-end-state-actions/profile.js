import { SET_USER_PROFILE } from "../actionTypes";

export const saveUserProfile = profile => {
  return { type: SET_USER_PROFILE, profile };
};
