import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
// import getNativeComponentAttributes from "react-native/Libraries/ReactNative/getNativeComponentAttributes";

export default function App() {
  // using state to get the user entered goal  
  const [enteredGoal, setEnteredGoal] = useState('');
  // array of entered goals
  const [goals, setGoals] = useState( [] );

  // gets the users entered text on each keystroke 
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  };
  
  // manages the array of entered goals 
  const addGoalHandler = () => {
    // gets current array of goals and ands the entered text to the array
    setGoals( goals => [...goals, enteredGoal]);
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
        <View >
          {goals.map((goal) => <Text key={goal} >{goal}</Text> )}
        </View>
      {/* view of the users goals */}
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
  }

})
