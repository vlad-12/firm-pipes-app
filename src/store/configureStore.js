import { createStore, combineReducers, compose } from "redux";

import profileReducer from "./reducers/profile";
import navigationReducer from "./reducers/navigation";

const rootReducer = combineReducers({
  // places: placesReducer
  profile: profileReducer,
  navigationStore: navigationReducer
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
