import { SET_CURRENT_SCREEN, SET_CURRENT_SIDEBAR_SCREEN } from "../actionTypes";

export const saveCurrentScreen = screen => {
  return { type: SET_CURRENT_SCREEN, screen };
};

export const saveCurrentSidebarScreen = sidebarScreen => {
  return { type: SET_CURRENT_SIDEBAR_SCREEN, sidebarScreen };
};
