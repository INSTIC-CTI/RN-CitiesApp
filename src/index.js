import React from "react";

import Cities from "./Cities/Cities";
import City from "./Cities/City";
import AddCity from "./AddCity/AddCity";

import { colors } from "./theme";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const options = {
  navigationOptions: {
    headerStyle: { backgroundColor: colors.primary },
    headerTintColor: "#fff",
  },
};

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities" component={Cities} />
      <Stack.Screen name="City" component={City} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cities" component={MyStack} />
      <Tab.Screen name="AddCity" component={AddCity} />
    </Tab.Navigator>
  );
}


export default MyTabs
