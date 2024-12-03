import { Text, Button, View, StyleSheet, TextInput, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';


export default function Index({ navigation }) {

    return (   
        <View style={styles.container}>
             <TouchableOpacity
                style={styles.leftRow}
                onPress={() =>
                    navigation.navigate('homeScreen', { name: 'homeScreen' })
                }
            >
 
                    <FontAwesome6 style={styles.leftRowTxt} name='arrow-left' size={40} color={'black'} />
            </TouchableOpacity>
            <Image style={styles.ImgCompra} source={require('../../../assets/img/books/domCasmurro.jpg')} />
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    leftRowTxt: {
        fontSize: 40,
        marginTop: 62,
        marginRight: '83%',
    },
    ImgCompra: {
        width: 250,
        height: 375,
        borderRadius: 10
    }
});
