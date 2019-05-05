import { Navigation } from "react-native-navigation";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const navBarStyle = {
  // navBarBackgroundColor: "white",
  navBarButtonColor: "gray",
  navBarTextColor: "gray",
  statusBarTextColorScheme: "dark",
  navBarHidden: true
  // navBarCustomView: "partypypes.NavView"
};

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(
      Platform.OS === "android"
        ? "md-notifications-outline"
        : "ios-notifications-outline",
      30
    ),
    Icon.getImageSource(Platform.OS === "android" ? "md-more" : "ios-more", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "partypypes.TodayScreen",
          label: "Today",
          title: "Today",
          icon: require("../../assets/img/icon/clock-gray1.png"),
          selectedIcon: require("../../assets/img/icon/clock-blue.png"),
          navigatorStyle: navBarStyle,
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[1],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          },
          topBar: {
            drawBehind: false
          }
        },
        {
          screen: "partypypes.TimeCardScreen",
          label: "Time card",
          title: "Time card",
          icon: require("../../assets/img/icon/trello-gray.png"),
          selectedIcon: require("../../assets/img/icon/trello-blue.png"),
          navigatorStyle: navBarStyle,
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[1],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          },
          topBar: {
            drawBehind: false
          }
        },
        {
          screen: "partypypes.ScheduleScreen",
          label: "Schedule",
          title: "Schedule",
          icon: require("../../assets/img/icon/calendar-gray.png"),
          selectedIcon: require("../../assets/img/icon/calendar-blue1.png"),
          navigatorStyle: navBarStyle,
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[1],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          },
          topBar: {
            drawBehind: false
          }
        },
        {
          screen: "partypypes.TimeOffScreen",
          label: "Time off",
          title: "Time off",
          icon: require("../../assets/img/icon/coffee-gray.png"),
          selectedIcon: require("../../assets/img/icon/coffee-blue.png"),
          navigatorStyle: navBarStyle,
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[1],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          },
          topBar: {
            drawBehind: false
          }
        },
        {
          screen: "partypypes.NotificationScreen",
          label: "Notification",
          title: "Notification",
          icon: sources[0],
          navigatorStyle: navBarStyle,
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[1],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          },
          topBar: {
            drawBehind: false
          }
        },
        {
          screen: "partypypes.SideDrawer",
          label: "SideDrawer",
          title: "SideDrawer",
          icon: sources[0]
          // navigatorStyle: navBarStyle,
          // navigatorButtons: {
          //   leftButtons: [
          //     {
          //       icon: sources[1],
          //       title: "Menu",
          //       id: "sideDrawerToggle"
          //     }
          //   ]
          // },
          // topBar: {
          //   drawBehind: false
          // }
        }
      ],
      tabsStyle: {
        tabBarButtonColor: "#A6A6B3",
        tabBarSelectedButtonColor: "#22a6ff",
        // tabBarTextFontFamily: "'Montserrat', sans-serif",
        tabBarBackgroundColor: "#ffffff",
        forceTitlesDisplay: true,
        tabFontSize: 14,
        selectedTabFontSize: 14
        // tabBarTextFontSize: 25,
        // tabFontSize: 30,
        // selectedFontsize: 30
      },
      drawer: {
        right: {
          screen: "partypypes.SideDrawer"
        }
      },
      appStyle: {
        tabBarSelectedButtonColor: "#22a6ff",
        tabBarButtonColor: "#A6A6B3",
        // navBarTextFontSize: 50,
        forceTitlesDisplay: true,
        tabFontFamily: "Avenir-Medium",
        tabFontSize: 14,
        selectedTabFontSize: 14,
        navBarHidden: true
        // tabFontFamily: "'Montserrat', sans-serif"
        // tabFontSize: 30,
        // selectedFontsize: 30
      }
    });
  });
};

export default startTabs;
