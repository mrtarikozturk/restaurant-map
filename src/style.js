import { StyleSheet, Dimensions } from 'react-native';

// SearchBar Component
export const searchBar = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.8,
        top: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        padding: 0,
        marginLeft: 5
    }

})

// City Component
export const city = StyleSheet.create({
    container: {
        backgroundColor: '#ffd54f',
        padding: 5,
        margin: 10,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#424242',
        fontWeight: 'bold',
        marginLeft: 5
    }

})


