import React from 'react';
import propTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native'; 
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default function Weather({temp}){
    return (
    <View style={styles.container}>
        <View style={styles.halfcontainer}>
            <MaterialCommunityIcons size ={86} name='weather-pouring'/>
            <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={styles.halfcontainer}>

        </View>
        
    </View>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Ash",
        "Dust",
        "Fog",
        "Mist"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"  
    },
    temp:{
        fontSize: 32
    },
    halfcontainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }

});
