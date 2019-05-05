import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import Icon from "react-native-vector-icons/Feather";
import MapView from 'react-native-maps';
import MainText from "@Component/Text/main-text";
import TitleText from "@Component/Text/titleText";
import Header from "../main-tabs/header";

const workers = [
  {
      name: 'Ana Markovic',
      type: 'Lunch break',
      lat: 44.802415,
      lng: 20.466481
  },
  {
      name: 'Niko Beretic',
      type: 'Anderson wedding Load In',
      lat: 44.882415,
      lng: 20.496481
  },
  {
      name: 'Jake Anderson',
      type: 'Office hours',
      lat: 44.852415,
      lng: 20.416481
  },
  {
      name: 'Pavle Prica',
      type: 'Load Out - Henderson wedding',
      lat: 44.812415,
      lng: 20.446481
  },
];

export default class SeeWorkingScreen extends Component {
  state = {
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122 
    },
    staffName: ""
  }

  componentDidMount() {
    const focusedLocation = {
      longitude: workers[0].lng,
      latitude: workers[0].lat,
      longitudeDelta: this.state.focusedLocation.longitudeDelta,
      latitudeDelta: this.state.focusedLocation.latitudeDelta
    }
    const staffName = workers[0].name;
    this.setState({ focusedLocation, staffName });
  }
  onViewShifts = () => {
    this.props.navigator.push({
      title: "today",
      screen: "partypypes.TodayScreen",
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }

  setWorkerPosition = (worker) => {
    const focusedLocation = {
      longitude: worker.lng,
      latitude: worker.lat,
      longitudeDelta: this.state.focusedLocation.longitudeDelta,
      latitudeDelta: this.state.focusedLocation.latitudeDelta
    }
    const staffName = worker.name;
    this.setState({ focusedLocation, staffName });
  }

  render() {
    const coords = {
      latitude: this.state.focusedLocation.latitude,
      longitude: this.state.focusedLocation.longitude
    }
    return (
      <View>
        <Header onToggleSideBar={this.onToggleSideBar} />
        <ScrollView style={styles.root}>
          <View style={styles.topHeader}>
            <TitleText>Today's Shifts</TitleText>
            <TouchableOpacity onPress={this.onViewShifts}>
              <MainText style={styles.topRightText}>View shifts</MainText>
            </TouchableOpacity>
          </View>
          <MapView region={this.state.focusedLocation} style={styles.mapViewContainer} showUserLocation={true}>
            <MapView.Marker coordinate={coords} title={this.state.staffName}/>
          </MapView>
          {workers.map((worker, index) => {
            return <View style={styles.staffContainer} key={index}>
              <View>
                <MainText style={styles.staffName}>{worker.name}</MainText>
                <MainText style={styles.staffShift}>{worker.type}</MainText>
              </View>
              <TouchableOpacity style={styles.staffRight} name={worker.name} onPress={() => this.setWorkerPosition(worker)}>
                <Icon name="map-pin" size={16} />
                <MainText style={styles.staffMapText}>Show on map</MainText>
              </TouchableOpacity>
            </View>
          })}
          <View style={{marginTop: 20, marginBottom: 50}}></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 10
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  topRightText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#777EB0",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#777EB0",
  },
  mapViewContainer: {
    width: "100%",
    height: 300,
    marginTop: 25,
    marginBottom: 15
  },
  mapContainer: {
    width: "100%",
    height: 350,
    backgroundColor: "#A6A6B3",
    marginTop: 25,
    marginBottom: 15
  },
  staffContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  staffName: {
    fontSize: 18,
    color: "#41424a",
    fontWeight: "400"
  },
  staffShift: {
    fontSize: 14,
    color: "#22A6FF",
    fontWeight: "400"
  },
  staffRight: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  staffMapText: {
    fontSize: 14,
    color: "#A6A6B3",
    marginLeft: 5
  }
});
