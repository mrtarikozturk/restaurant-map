import React from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

//My Imports
import { searchBar } from '../style';

const SearchBar = (props) => {
    return (
        <View style={searchBar.container}>
            <Icon name='search' size={20} color='gray' />
            <TextInput
                style={searchBar.input}
                placeholder='Search a city..'
                onChangeText={(text) => props.onChangeText(text)}
            />
        </View>
    )
}

export { SearchBar }
