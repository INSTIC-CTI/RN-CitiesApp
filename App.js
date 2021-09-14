import React, { Component } from "react";
import { render } from "react-dom";
import { Platfrom, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


import MyTabs from "./src";

export default class App extends Component {
  state = {
    cities: [],
  };

  addCity = (city) => {
    const cities = this.state.cities;
    cities.push(city);
    this.setState({ cities });
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex((item) => {
      return item.id === city.id;
    });
    const chosenCity = this.state.cities[index];
    chosenCity.location.push(location);
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1),
    ];
    this.setState({ cities });
  };

  render() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      
    );
  }
}
