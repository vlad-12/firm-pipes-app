import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Modal from "react-native-modal";
import MainText from "@Component/Text/main-text";

export default class NoteModal extends Component {
  render() {
    const { isNoteModalVisible, edit, saveNote, closeNote } = this.props;
    return (
      <View>
        <Modal isVisible={isNoteModalVisible} style={styles.modal} backdropOpacity={0}>
          <View style={styles.modalContainer}>
            <View style={styles.contextContainer}>
              {edit ? <MainText style={styles.modalContext}>Edit Note</MainText>
                : <MainText style={styles.modalContext}>Add Note</MainText>
              }               
              <TextInput multiline={true} numberOfLines={4} style={styles.noteContainer} />
            </View>
            <View style={styles.modalButsContainer}>
              <TouchableOpacity onPress={saveNote} style={[styles.modalButton, styles.modalbutSuccess]}>
                <MainText style={{ color: "white" }}>Save</MainText>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeNote} style={[styles.modalButton,styles.modalButCancel]}>
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
    height: 230, 
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
  },
  noteContainer: {
    borderWidth: 1,
    borderColor: "rgb(235,235,242)",
    borderRadius: 3,
    color: "rgb(92,94, 104)",
    marginTop: 10,
    height: 90,
    width: "100%",
    alignItems: "flex-start",
    textAlignVertical: "top",
    padding: 5
  }
})
