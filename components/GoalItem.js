import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return(
    <View style={styles.goalListItem}>
        {/* text is wrapped in a view component for styling because view doesn't fully support styles */}
        <Text>
            {props.title}
        </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    goalListItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#cccccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem;