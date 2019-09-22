import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import {Alert} from 'react-native';
import axios from 'axios';

const API_KEY = "c743c0fba00b6f2bf6c367ef61dbd746"
export default class extends React.Component {
  state = {
    isLoading : true
  }
  getWeather = async(latitude,longitude)=>{
    const{data} = await axios.get(
      `https://samples.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      console.log(data);
  }

  getLocation = async() =>{
    try {
      //throw Error();
    
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading:false})
      
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

