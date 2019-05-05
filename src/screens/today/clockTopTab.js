import React, { Component } from 'react'
import { View, StyleSheet, Switch, Image, TouchableOpacity } from 'react-native'
import MainText from "@Component/Text/main-text";
import switchRounderImage from "../../assets/img/switcher-round-blue.png";
import coffeeRounderImage from "../../assets/img/coffee-round-blue.png";
import endBreakImage from '../../assets/img/end-break-orange.png';

export default class ClockTopTab extends Component {
  render() {
    const { toggleClock, clockValue, openSwitch, openStartBreak, openEndBreak, isTakeBreak } = this.props;
    return (
      <View style={styles.clockTabContainer}>
        <View style={styles.clockSubTabContainer}>
          {clockValue ?
            <MainText style={styles.clockTabText}>Clock out</MainText>
            : <MainText style={styles.clockTabText}>Clock in</MainText>
          }
          <Switch onValueChange={toggleClock} value={clockValue}
            trackColor="transparent"
            thumbColor={clockValue ? "#1da7ff" : "#cccccc"}
            style={{ width: 50 }} />
        </View>
        {clockValue &&
          <View style={styles.clockSubTabContainer}>
            <TouchableOpacity onPress={openSwitch} style={{flexDirection: "row"}}>
              <Image
                style={styles.clockTabImage}
                source={switchRounderImage}
                resizeMode={"contain"}
              />
              <MainText style={styles.clockRightTabText}>Switch</MainText>  
          </TouchableOpacity>
          {!isTakeBreak ? 
              <TouchableOpacity onPress={openStartBreak} style={{flexDirection: "row"}}>
                <Image
                style={styles.clockTabImage}
                  source={coffeeRounderImage}
                  resizeMode={"contain"}
                />
                <MainText style={styles.clockRightTabText}>Take a break</MainText>
              </TouchableOpacity>
            :
            <TouchableOpacity onPress={openEndBreak} style={{flexDirection: "row"}}>
                <Image
                style={styles.clockTabImage}
                  source={endBreakImage}
                  resizeMode={"contain"}
                />
                <MainText style={styles.clockRightTabText}>End break</MainText>
            </TouchableOpacity>
               }
            
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  clockTabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25
  },
  clockTabText: {
    fontSize: 16,
    color: "#777EB0",
    fontWeight: "400",
    marginRight: 10
  },
  clockSubTabContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  clockTabImage: {
    width: 25,
    height: 25,
    marginLeft: 5
  },
  clockRightTabText: {
    fontSize: 14,
    color: "#777EB0",
    fontWeight: "400",
    marginLeft: 5
  }
})