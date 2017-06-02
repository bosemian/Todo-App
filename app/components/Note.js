//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class Note extends Component {
  render() {
    const { deleteTask, task:{ id, date, name } } = this.props
    return (
      <View key={id} style={styles.note}>
        <Text style={styles.noteText}>{date}</Text>
        <Text style={styles.noteText}>{name}</Text>

        <TouchableOpacity 
          onPress={this.props.deleteTask}
          style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>DEL</Text>
        </TouchableOpacity>
      </View>
    );
    
  }
}

// define your styles
const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#EDEDED"
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#F8DF9E"
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E05247",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: "#FFF"
  }
});

//make this component available to the app
export default Note;
