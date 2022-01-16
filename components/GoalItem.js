import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onDelete.bind(this, props.id)}
            >
            <View style={styles.goalListItem} >
                {/* text is wrapped in a view component for styling because view doesn't fully support styles */}
                <Text>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
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