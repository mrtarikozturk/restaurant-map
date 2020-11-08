import React from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//My Imports
import { searchBar } from '../style';

const SearchBar = (props) => {
    return (
        <View style={searchBar.container}>
            <Icon name='magnify' size={20} color='gray' />
            <TextInput
                style={searchBar.input}
                placeholder='Search a city..'
                onChangeText={(text) => props.onChangeText(text)}
            />
        </View>
    )
}

export { SearchBar }
