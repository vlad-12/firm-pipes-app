import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import MainText from "@Component/Text/main-text";
import RadioForm from 'react-native-simple-radio-button';

export default class NoShiftModal extends Component {
  state = {
    shiftTypes: [
      { key: 0, label: "Event" },
      { key: 1, label: "Regular" }, 
    ],
    initialRadioPos: 0,
    shift: ""
  }

  render() {
    const {
      isNoShiftModalVisible, clockIntoShiftModal, closeClockIntoShiftModal,
    } = this.props;
    return (
      <View>
        <Modal isVisible={isNoShiftModalVisible} style={[styles.modal, {height: 200}]} backdropOpacity={0}>
          <View style={styles.modalContainer}>
            <View style={styles.contextContainer}>
              <MainText style={styles.modalContext}>Choose the shift you want to clock in to</MainText> 
              <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'flex-start',
                }}>
                {/* <RadioForm
                  key={this.state.formKey}
                  radio_props={this.state.shiftTypes}
                  initial={this.state.initialRadioPos}
                  formHorizontal={true}
                  labelHorizontal={true}
                  buttonColor={this.state.switched ? '#673AB7' : '#A9A9A9'}
                  labelColor={this.state.switched ? '#673AB7' : '#A9A9A9'}
                  selectedButtonColor={this.state.switched ? '#22A6FF' : '#22A6FF'}
                  selectedLabelColor={this.state.switched ? '#22A6FF' : '#22A6FF'}
                  labelStyle={{ marginRight: 20 }}
                  buttonSize={10}
                  onPress={currentShift => {
                    this.setState({ currentShift });
                  }}
                /> */}
              </View>
            </View>
            <View style={styles.modalButsContainer}>
              <TouchableOpacity onPress={clockIntoShiftModal} style={[styles.modalButton, styles.modalbutSuccess]}>
               <MainText style={{ color: "white" }}>Clock in</MainText>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeClockIntoShiftModal} style={[styles.modalButton,styles.modalButCancel]}>
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
    // alignItems: "center",
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