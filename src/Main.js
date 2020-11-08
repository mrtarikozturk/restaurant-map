import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';

//My Imports
import { SearchBar, City } from './components';

const Main = () => {
    //useStates
    const [cityList, setCityList] = useState([]);
    const [restaurants, setRestaurants] = useState([]);

    // useEffects
    useEffect(() => {
        fetchData();
    }, []);

    // Functions
    const fetchData = async () => {
        const { data } = await axios.get('http://opentable.herokuapp.com/api/cities');
        setCityList(data.cities);
    };

    const selectCity = async (city) => {

        const { data: { restaurants } } = await axios.get('http://opentable.herokuapp.com/api/restaurants?city=' + city);
        setRestaurants(restaurants);
    }

    const renderItem = ({ item }) => (
        <City data={item} onPress={() => { selectCity(item) }} />
    );

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={{ position: 'absolute' }}>
                <SearchBar />
                <FlatList
                    horizontal
                    data={cityList}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default Main;
