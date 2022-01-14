import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
// import getNativeComponentAttributes from "react-native/Libraries/ReactNative/getNativeComponentAttributes";

export default function App() {
  // using state to get the user entered goal  
  const [enteredGoal, setEnteredGoal] = useState('');
  // array of entered goals
  const [goals, setGoals] = useState([]);

  // gets the users entered text on each keystroke 
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  };

  // manages the array of entered goals 
  const addGoalHandler = () => {
    // gets current array of goals and ands the entered text to the array
    setGoals(goals => [...goals, { key: Math.random().toString(), text: enteredGoal }]);
  };

  return (
    // main view of the UI
    <View style={styles.screen}>
      {/* text input and button view */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <Button
          title='Add'
          onPress={addGoalHandler}
        />

      </View>
      {/* A conditionally rendered scrolling component view of the users goals */}
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={goals}
        // makes a View component for each item in goal array
        renderItem={itemData => (
          <View style={styles.goalListItem}>
            {/* text is wrapped in a view component for styling because view doesn't fully support styles */}
            <Text>
              {itemData.item.text}
            </Text>
          </View>
        )} />
      <View>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }, inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    width: 200,
  },
  goalListItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#cccccc',
    borderColor: 'black',
    borderWidth: 1
  }

})
