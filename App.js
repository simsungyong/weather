import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import {Alert} from 'react-native';

export default class extends React.Component {
  state = {
    isLoading : true
  }
  getLocation = async() =>{
    try {
      //throw Error();
      await Location.requestPermissionsAsync();
      const {coords} = await Location.getCurrentPositionAsync();
      //this.setState({isLoading:false})
      console.log(coords.latitude, coords.longitude);      
    } catch (error) {
      Alert.alert("Can't find you");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading} = this.state;
    return isLoading ? <Loading />: null;
  }
}

