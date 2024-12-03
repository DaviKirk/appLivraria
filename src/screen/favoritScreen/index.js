import { Text, Button, View, StyleSheet, TextInput, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Index({ navigation }) {

    return (   
        <View style={style.container}>
            <Text>OLa favorita o livro ai</Text>
        </View>
     );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#fff'
    }
});