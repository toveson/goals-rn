import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const GoalItem = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onDelete.bind(this, props.id)}
        >
            <View style={styles.goalListItem} >
                {/* text is wrapped in a view component for styling because view doesn't fully support styles */}
                    <Text style={styles.centerText} >
                        {props.title}
                    </Text>
            </View>
        </TouchableOpacity>
    );
};

export default GoalItem;