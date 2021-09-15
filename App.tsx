import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AppStack from './src/routes/AppStack'

import CartProvider from './src/context/Cart';

export default function App() {
  return (
    <CartProvider>
    <AppStack />
    <StatusBar style='auto' />
    </CartProvider>
  );
}
