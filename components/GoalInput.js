import React, { useState } from 'react';
import { View, TextInput, Button, Modal } from 'react-native';
import styles from './styles';


const GoalInput = props => {
    // using state to get the user entered goal  
    const [enteredGoal, setEnteredGoal] = useState('');

    // gets the users entered text on each keystroke 
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal
            visible={props.visible}
            animationType='slide'
        >
            {/* text input and button view */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Goals"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='cancel'
                            color='red'
                            onPress={props.onCancel}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title='Add'
                            onPress={addGoalHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;
