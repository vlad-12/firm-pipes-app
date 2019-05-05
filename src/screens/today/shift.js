import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Feather";
import MainText from "@Component/Text/main-text";
import NoteModal from './note-modal';

export default class Shift extends Component {
  state = {
    isNoteModalVisible: false
  }

  modalVisible = () => {
    this.setState({ isNoteModalVisible: true });
  }

  closeNote = () => {
    this.setState({ isNoteModalVisible: false });
  }

  saveNote = () => {
    this.setState({ isNoteModalVisible: false });
  }

  render() {
    const { colors, shift } = this.props;
    return (
      <View style={[styles.shiftContainer, {backgroundColor: colors.backgroundColor}]}>
        <MainText style={styles.shiftTime}>{shift.shiftStartTime} - {shift.shiftEndTime}</MainText>
        <MainText style={[styles.shiftText, {color: colors.color}]}>{shift.shiftTitle}</MainText>
        <MainText style={[styles.shiftText, styles.shiftContext]}>{shift.shiftContext}</MainText>
        <View style={styles.shiftTimesContainer}>
          <View style={styles.subTimesContainer}>
            <MainText style={[styles.shiftText, styles.shiftName]}>Clock In</MainText>
            <MainText style={styles.shiftText}>{shift.clockTime}</MainText>
          </View>
          <MainText style={[styles.shiftText, {color: colors.color}]}>{shift.clockHours}</MainText>
        </View>
        <View style={styles.shiftTimesContainer}>
          <View style={styles.subTimesContainer}>
            <MainText style={[styles.shiftText, styles.shiftName]}>Lunch break</MainText>
            <MainText style={styles.shiftText}>{shift.breakTime}</MainText>
          </View>
          <MainText style={[styles.shiftText, {color: colors.color}]}>{shift.breakHours}</MainText>
        </View>
        <View style={[styles.shiftTimesContainer,{marginTop: 10}]}>
          {shift.note !== "" ?
            <React.Fragment>
              <MainText style={styles.shiftText}>{shift.note}</MainText>
              <TouchableOpacity style={styles.subTimesContainer} onPress={this.modalVisible}>
                <Icon name="edit-2" size={16} style={{marginRight: 3}} />
                <MainText style={styles.shiftText}>Edit</MainText>
              </TouchableOpacity>
            </React.Fragment>
            :
            <React.Fragment>
              <View></View>
              <TouchableOpacity style={styles.subTimesContainer} onPress={this.modalVisible}>
                <Icon name="plus" size={16} style={{marginRight: 3}}/>
                <MainText style={styles.shiftText}>Add note</MainText>  
              </TouchableOpacity>
            </React.Fragment>
          }
        </View>
        {shift.note !== "" ?
          <NoteModal edit note={shift.note} isNoteModalVisible={this.state.isNoteModalVisible}
            saveNote={this.saveNote} closeNote={this.closeNote} />
          :
          <NoteModal add isNoteModalVisible={this.state.isNoteModalVisible}
            saveNote={this.saveNote} closeNote={this.closeNote} />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  shiftContainer: {
    paddingTop: 18,
    paddingBottom: 25,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 25,
    borderRadius: 3
  },
  shiftTime: {
    fontSize: 20,
    color: "black",
    marginBottom: 10
  },
  shiftText: {
    fontSize: 16,
    fontWeight: "400"
  },
  shiftContext: {
    color: "#41424A",
    marginBottom: 10,
    marginTop: 10
  },
  shiftTimesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5
  },
  subTimesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  shiftName: {
    color: "#777EB0",
    marginRight: 15
  }
})
