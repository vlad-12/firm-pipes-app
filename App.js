import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import AuthScreen from "@screens/auth/auth";
import TodayScreen from "@screens/today/today";
import TimeCardScreen from "@screens/time-card/time-card";
import ScheduleScreen from "@screens/schedule/schedule";
import TimeOffScreen from "@screens/time-off/time-off";
import NotificationScreen from "@screens/notification/notification";
import ProfileScreen from "@screens/profile/profile";
import NavView from "@screens/main-tabs/navView";
import SideDrawer from "@screens/side-drawer/side-drawer";
import SeeWorkingScreen from "@screens/today/see-working";
import Header from "@screens/main-tabs/header";
import configureStore from "./src/store/configureStore";
const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "partypypes.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "partypypes.NavView",
  () => NavView,
  store,
  Provider
);

Navigation.registerComponent(
  "partypypes.Header",
  () => Header,
  store,
  Provider
);

Navigation.registerComponent(
  "partypypes.TodayScreen",
  () => TodayScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "partypypes.TodayScreen",
  () => TodayScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "partypypes.TimeCardScreen",
  () => TimeCardScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "partypypes.ScheduleScreen",
  () => ScheduleScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "partypypes.TimeOffScreen",
  () => TimeOffScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "partypypes.NotificationScreen",
  () => NotificationScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "partypypes.ProfileScreen",
  () => ProfileScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "partypypes.SideDrawer",
  () => SideDrawer,
  store,
  Provider
);

Navigation.registerComponent(
  "partypypes.SeeWorkingScreen",
  () => SeeWorkingScreen,
  store,
  Provider
)

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "partypypes.AuthScreen",
    title: "Login"
  }
});
