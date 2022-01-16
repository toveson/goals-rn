import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


const GoalInput = props => {
    // using state to get the user entered goal  
    const [enteredGoal, setEnteredGoal] = useState('');

    // gets the users entered text on each keystroke 
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };

    return (
        // text input and button view 
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Goals"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />

            <Button
                title='Add'
                onPress={props.onAddGoal.bind(this, enteredGoal)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
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
})

export default GoalInput;