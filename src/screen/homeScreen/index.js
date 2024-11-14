import { Text, Button, View, StyleSheet, TextInput, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Index({ navigation }) {

    return (
        <ScrollView
        style={styles.container}
        >
            <View
            style={styles.navBar}
            >
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3060BB'
    }
});