import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <Text>Getting the fucking weather</Text>
        </View>
    );
}

const sytles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "flex-end",
        paddingHorizontal:20,
        paddingVertical:100,
        backgroundColor: '#FDF6AA'
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30
    }
});
