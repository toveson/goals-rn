import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";

export default function App() {
  // array of entered goals
  const [goals, setGoals] = useState([]);

  // manages the array of entered goals 
  const addGoalHandler = (goalTitle) => {
    // gets current array of goals and ands the entered text to the array
    setGoals(goals => [...goals, { key: Math.random().toString(), text: goalTitle }]);
  };

  return (
    // main view of the UI
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      {/* A conditionally rendered scrolling component view of the users goals */}
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={goals}
        // makes a View component for each item in goal array
        renderItem={itemData => (
          <GoalItem title={itemData.item.text} />
        )} />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
})
