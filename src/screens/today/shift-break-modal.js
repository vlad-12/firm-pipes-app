import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import MainText from "@Component/Text/main-text";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default class ShiftBreakModal extends Component {
  state = {
    breaks: [
      { key: 0, label: "Shift" },
      { key: 1, label: "Lunch" },
    ],
    initialRadioPos: 0,
  }

  render() {
    const {
      isSwitchModalVisible, switchBlock, closeSwichModal,
      isBreakStartModalVisible, startBreak, closeStartBreakModal,
      isBreakEndModalVisible, breakOver, closeBreakModal
    } = this.props;
    return (
      <View>
        <Modal isVisible={isSwitchModalVisible} style={styles.modal} backdropOpacity={0}>
          <View style={styles.modalContainer}>
            <View style={styles.contextContainer}>
              <MainText style={styles.modalContext}>Are you sure you want to clock in to the next shift?</MainText> 
            </View>
            <View style={styles.modalButsContainer}>
              <TouchableOpacity onPress={switchBlock} style={[styles.modalButton, styles.modalbutSuccess]}>
               <MainText style={{ color: "white" }}>Yes, I am sure</MainText>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeSwichModal} style={[styles.modalButton,styles.modalButCancel]}>
                <MainText style={{color: "white"}}>Cancel</MainText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal isVisible={isBreakStartModalVisible} style={[styles.modal, {height: 170}]} backdropOpacity={0}>
          <View style={styles.modalContainer}>
            <View style={styles.contextContainer}>
              <MainText style={styles.modalContext}>Select the type of break</MainText> 
              <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'flex-start',
                }}>
                <RadioForm
                  key={this.state.formKey}
                  radio_props={this.state.breaks}
                  initial={this.state.initialRadioPos}
                  formHorizontal={true}
                  labelHorizontal={true}
                  buttonColor={this.state.switched ? '#673AB7' : '#A9A9A9'}
                  labelColor={this.state.switched ? '#673AB7' : '#A9A9A9'}
                  selectedButtonColor={this.state.switched ? '#22A6FF' : '#22A6FF'}
                  selectedLabelColor={this.state.switched ? '#22A6FF' : '#22A6FF'}
                  labelStyle={{ marginRight: 20 }}
                  buttonSize={10}
                  onPress={currentBreak => {
                    this.setState({ currentBreak });
                  }}
                />
              </View>
            </View>
            <View style={styles.modalButsContainer}>
              <TouchableOpacity onPress={startBreak} style={[styles.modalButton, styles.modalbutSuccess]}>
               <MainText style={{ color: "white" }}>Start break</MainText>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeStartBreakModal} style={[styles.modalButton,styles.modalButCancel]}>
                <MainText style={{color: "white"}}>Cancel</MainText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal isVisible={isBreakEndModalVisible} style={styles.modal} backdropOpacity={0}>
          <View style={styles.modalContainer}>
            <View style={styles.contextContainer}>
              <MainText style={styles.modalContext}>Is your break over?</MainText> 
            </View>
            <View style={styles.modalButsContainer}>
              <TouchableOpacity onPress={breakOver} style={[styles.modalButton, styles.modalbutSuccess]}>
              <MainText style={{ color: "white" }}>Yes, go back to shift</MainText>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeBreakModal} style={[styles.modalButton,styles.modalButCancel]}>
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