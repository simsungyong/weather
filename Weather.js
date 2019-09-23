import React from 'react';
import propTypes from 'prop-types';
import {View, Text, StyleSheet, StatusBar} from 'react-native'; 
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';



const weatherOptions = {
    Clear : {
        iconName: 'weather-sunny',
        gradient:['#F7FE2E','#FE9A2E'],
        title: "Sunny",
        subtitle: "fucking hot"
    },
    Thunderstorm:{
        iconName:"weather-hurricane",
        gradient:['#210B61','#220A29'],
        title: "Thunderstorm",
        subtitle: "wow... Don't go outside"
    },
    Drizzle:{
        iconName:"weather-partlycloudy",
        gradient:['#A4A4A4','#1C1C1C'],
        title:"Drizzle",
        subtitle:"Wow... drizzle fufk"
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:['#086A87','#0A2229'],
        title:"Rain",
        subtitle: "막걸리엔 파전~"
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:['#E6E6E6','#0B2161'],
        title:"Snow",
        subtitle:"첫 눈.."
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:['#A4A4A4','#1C1C1C'],
        title:"Clouds",
        subtitle:"우울..."
    },
    Haze:{
        iconName:"weather-hail",
        gradient:['#A4A4A4','#1C1C1C'],
        title:"Haze",
        subtitle:"sfsf"
    },
    Fog:{
        iconName:"weather-sunset-down",
        gradient:['#A4A4A4','#1C1C1C'],
        title:"Fog",
        subtitle:"fsfsf"
    },
    Mist:{
        iconName:"weather-sunset-up",
        gradient:['#A4A4A4','#1C1C1C'],
        title:"Mist",
        subtitle:"sfsfsfsf"
    }
};

export default function Weather({temp, condition}){
    return (
    
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons
                    size ={86} 
                    name={weatherOptions[condition].iconName} 
                    color='white'/>
                <Text style={styles.temp}>{temp}</Text>
            </View>
                <View style={{...styles.halfcontainer, ...styles.textContainer}}>
                    <View>
                        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                    </View>

            </View>
        </LinearGradient>

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
        fontSize: 30,
        color: 'white'
    },
    halfcontainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        color: 'white',
        fontSize: 44,
        marginBottom:10,
        fontWeight: '400'  //굵기
    },
    subtitle:{
        color: 'white',
        fontSize: 24,
        fontWeight:'200'
    },
    textContainer:{
        paddingHorizontal:20
    }

});
