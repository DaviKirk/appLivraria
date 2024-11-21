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
                <TouchableOpacity
                style={styles.btnPesquisar}
                >
                    <Text
                    style={styles.txtBtn}
                    >Pesquisar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.btnCarrinho}
                >
                    <Text
                    style={styles.txtBtn}
                    >carrinho</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.btnHome}
                >
                    <Text
                    style={styles.txtBtn}
                    >H</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.imgNav} source={require('../../../assets/imageNav.png')} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3060BB',
        display: 'flex'
    },
    imgNav:{
        height: 53,
        width: '100%',
        marginTop: -8
    },
    navBar: {
        paddingTop: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%',
        height: 108,
    },
    btnPesquisar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: '#000000',
        width: 162,
        height: 43,
        marginRight: 5
    },
    btnCarrinho: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: '#000000',
        width: 146,
        height: 43,

    },
    btnHome: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: '#000000',
        width: 50,
        height: 50,
        marginLeft: 5,
    },
    txtBtn: {
        textAlign: 'center',
        fontSize: 20
    }
});