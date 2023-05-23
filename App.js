import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './components/Tabs';
import ProductDetails from './screens/ProductDetails';


const Stack =  createStackNavigator()


export default function App({navigation,route}) {

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Montserrat': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
        'MontserratThin': require('./assets/fonts/Montserrat-VariableFont_wght.ttf')
      });
    }

    loadFont();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      
      >
        <Stack.Screen name="Tabs" component={Tabs} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

