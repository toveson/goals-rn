import React, { useState } from "react";
import { View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";
import styles from "./components/styles";

export default function App() {
  // array of entered goals
  const [goals, setGoals] = useState([]);

  // manages the add goal modal
  const [isAddMode, setIsAddMode] = useState(false);

  // manages the array of entered goals 
  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return;
    }
    // gets current array of goals and ands the entered text to the array
    setGoals(goals => [...goals, { id: Math.random().toString(), text: goalTitle }]);
    setIsAddMode(false);
  };

  const cancelGoalAddHandler = () => {
    setIsAddMode(false);
  };

  // removes goals when touched
  const removeGoalHandler = (goalID) => {
    setGoals(goals => {
      // filter returns new array that will remove the touched goal
      return goals.filter((goal) => goal.id !== goalID);
    })
  };

  return (
    // main view of the UI
    <View style={styles.screen}>
        <Button
          title='Add New Goal'
          onPress={() => setIsAddMode(true)}
        />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAddHandler}
      />
      {/* A conditionally rendered scrolling component view of the users goals */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        // makes a View component for each item in goal array
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.text}
          />
        )} />
    </View>

  );
}
