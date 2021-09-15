import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { withBadge, Icon } from 'react-native-elements';

import {useCart} from '../context/Cart'

import Cart from '../screens/Cart';
import {Main} from '../screens/Main';

const AppStack = createBottomTabNavigator();

export const MyTabs: React.FC = () => {
  const {cart} = useCart()
  const Badge = withBadge(cart.length)(Icon);

  return (
    <AppStack.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#454777',
      }}
    >
      <AppStack.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={20} />
          ),
        }}
      />
      <AppStack.Screen
        name="Carrinho"
        component={Cart}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ color, size=2 }) => (
            <Badge type="ionicon" color={color} name="md-cart" size={24} />
          ),
        }}
      />
    </AppStack.Navigator>
  );
}
