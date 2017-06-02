//import liraries
import React, { Component } from 'react';
import { 
  View,
  Text, 
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Note from './components/Note'

// create a component
class App extends Component {

  state = {
    taskArray: [{"name": "task 1", "date": "2017-06-02"}],
    noteText: ''
  }

  delete = (key) => {
    this.state.taskArray.slice(key, 1)
    this.setState({ taskArray: this.state.taskArray })
  }

  addTask = () => {
    if (this.state.noteText) {
      this.state.taskArray.push({ "name": this.state.noteText ,"date": "2017-06-02"})
      this.setState({ taskArray: this.state.taskArray })
      this.setState({ noteText: '' })
    }
  }

  renderTask = ({item}, i) => {
    let key = 0
    console.log(item)
    return (
      <Note 
        key={key}
        task={item}
        deleteTask={() => this.delete(key)}/>
    )
  }


  render() {
    const notes = this.state.taskArray.map((val, key) => {
      return 
    })

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>- NOTE -</Text>
        </View>

        <View style={styles.scrollContainer}>
          <FlatList
            data={this.state.taskArray}
            renderItem={this.renderTask} />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.addTask} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput 
            style={styles.textInput} 
            value={this.state.noteText}
            placeholder="> note"
            placeholderTextColor="white"
            onChangeText={(noteText) => this.setState({ noteText })}
            underlineColorAndroid="transparent">
          
          </TextInput>
        </View>

      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#85A581",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 5,
    borderBottomColor: "#DDD"
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: "#FCA24C",
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
    elevation: 0,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 24
  },
  textInput: {
    alignSelf: "stretch",
    color: "#FFF",
    padding: 20,
    paddingTop: 46,
    backgroundColor: "#587774",
    borderTopWidth: 2,
    borderTopColor: "#EDEDED"
  }
});

//make this component available to the app
export default App;
