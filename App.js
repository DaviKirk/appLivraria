import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import loginScreen from './src/screen/loginScreen';
import cadastroScreen from './src/screen/cadastroScreen';
import homeScreen from './src/screen/homeScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='loginScreen'
        component={loginScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name='cadastroScreen'
        component={cadastroScreen}
        options={{headerShown: false}} />
        <Stack.Screen
        name='homeScreen'
        component={homeScreen}
        options={{headerShown: false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
