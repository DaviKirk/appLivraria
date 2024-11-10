import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import das bibliotecas
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import das telas usadas no app localizads na pasta src/screens
import buyScreen from './src/screens/buyScreen';
import cartScreen from './src/screens/cartScreen';
import envioSucess from './src/screens/envioSucess';
import famoritScreen from './src/screens/favoritScreen';
import homeScreen from './src/screens/homeScreen';
import loginScreen from './src/screens/loginScreen';
import registerScreen from './src/screens/registerScreen';
import searchScreen from './src/screens/searchScreen';

export default function app(){
  
  //criação do obj stack que gerencia as telas criadas no app
  const Stack = createNativeStackNavigator();


  return(

    <NavigationContainer>
      {/* definindo a tela q ira cmç e encapsulando todas as telas do app*/}
      <Stack.Navigator intialRoute="loginScreen" >
      {/* declarando as telas */}
      <Stack.Screen name="loginScreen" component={loginScreen} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="buyScreen" component={buyScreen} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="cartScreen" component={cartScreen} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="envioSucess" component={envioSucess} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="homeScreen" component={homeScreen} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="famoritScreen" component={famoritScreen} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="registerScreen" component={registerScreen} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="searchScreen" component={searchScreen} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );

}

