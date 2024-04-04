import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './../screens/HomeScreen';
import EntryListScreen from './../screens/EntryListScreen';
import EntryEditScreen from './../screens/EntryEditScreen';
import EntryDeleteScreen from './../screens/EntryDeleteScreen';
import { Categories } from './Categories';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';

export type RootStackParamList = {
    EntryList: undefined;
    EntryEdit: { entryId: number };
    EntryDelete: { entryId: number };
  };
  
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const EntryStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="EntryList" component={EntryListScreen} />
        <Stack.Screen name="EntryEdit" component={EntryEditScreen} />
        <Stack.Screen name="EntryDelete" component={EntryDeleteScreen} />
      </Stack.Navigator>
  )
}


const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="Home" component={EntryStackNavigator} />
            <Tab.Screen name="Settings" component={Categories} />
            <Tab.Screen name="AuthSignup" component={SignupScreen} />
            <Tab.Screen name="AuthLogin" component={LoginScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
};

export default MainNavigation;