import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//pages
import Login from "../screens/Login";

import {MyTabs} from "./Tabs";

const {Navigator, Screen} = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
        <Screen name="Login" component={Login} />
        <Screen name="Tabs" component={MyTabs} />
      </Navigator>
    </NavigationContainer>
    );
}