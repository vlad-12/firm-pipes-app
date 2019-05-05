import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import MainText from "@Component/Text/main-text";

export default class ClockModal extends Component {
  render() {
    const { isClockInVisible, isClockOutVisible, clockIn, clockOut, closeClockInModal, closeClockOutModal,
    } = this.props;
    return (
      <View>
        <Modal isVisible={isClockInVisible} style={styles.modal} backdropOpacity={0}>
          <View style={styles.modalContainer}>
            <View style={styles.contextContainer}>
                <MainText style={styles.modalContext}>Would you like to clock in for the first shift of the day?</MainText>                
            </View>
            <View style={styles.modalButsContainer}>
              <TouchableOpacity onPress={clockIn} style={[styles.modalButton, styles.modalbutSuccess]}>
                <MainText style={{ color: "white" }}>Yes, clock in</MainText>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeClockInModal} style={[styles.modalButton,styles.modalButCancel]}>
                <MainText style={{color: "white"}}>Cancel</MainText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal isVisible={isClockOutVisible} style={styles.modal} backdropOpacity={0}>
          <View style={styles.modalContainer}>
            <View style={styles.contextContainer}>
              <MainText style={styles.modalContext}>Are you ready to clock out for the day?</MainText> 
            </View>
            <View style={styles.modalButsContainer}>
              <TouchableOpacity onPress={clockOut} style={[styles.modalButton, styles.modalbutSuccess]}>
               <MainText style={{ color: "white" }}>Yes, clock out</MainText>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeClockOutModal} style={[styles.modalButton,styles.modalButCancel]}>
                <MainText style={{color: "white"}}>Cancel</MainText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    margin: 0, 
    backgroundColor: 'white', 
    height: 150, 
    flex:0 , 
    bottom: 0, 
    position: 'absolute',
    width: '100%',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowColor: "#000",
    elevation: 20
  },
  modalContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
  },
  contextContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  modalContext: {
    color: "black",
    fontSize: 20,
    fontWeight: "400"
  },
  modalButsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  modalButton: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    height: 60
  },
  modalbutSuccess: {
    backgroundColor: "#22A6FF"
  },
  modalButCancel: {
    backgroundColor: '#0C1455'
  }
})