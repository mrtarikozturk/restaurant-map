import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//My Imports
import { city } from '../style';

const City = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={city.container}
        >
            <Icon name='bank' color='#424242' size={20} />
            <Text style={city.text}>{props.data}</Text>
        </TouchableOpacity>
    )
}

export { City };
