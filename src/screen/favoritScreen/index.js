import { Text, Button, View, StyleSheet, TextInput, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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
            <Text style={styles.TituloLivro}>Dom Casmurro</Text>
            <View style={styles.ViewInfo}>
                <Text style={styles.precoLivros}>R$ 30,00</Text>
                <Text style={styles.resumoLivro}>
                    Dom Casmurro, a obra mais conhecida do escritor Machado de Assis, conta a história
                     de Bentinho e Capitu, que, apaixonados na adolescência, têm que enfrentar um obstáculo
                      à realização de seus anseios amorosos,
                     pois a mãe de Bentinho, D. Glória, fez uma promessa de que seu filho seria padre.
                </Text>
                <TouchableOpacity
                    style={styles.buyBtn}
                >
                    <Text
                        style={styles.buyBtnTxt}
                    >Adicionar a prateleira</Text>
                    <FontAwesome name='shopping-basket' size={32} color={'white'} />

                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9e9e9',
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
        borderRadius: 10,
        marginTop: 24,
    },
    ViewInfo: {
        height: 410,
        width: '100%',
        borderRadius: 25,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    TituloLivro: {
        fontWeight: '300',
        fontSize: 26,
        padding: 10
    },
    precoLivros: {
        color: '#02C559',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 17,
        marginLeft: 33
    },
    buyBtn: {
        backgroundColor: '#3F5EC3',
        width: 302,
        height: 66,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        flexDirection: 'row',
    },
    buyBtnTxt: {
        fontWeight: 'medium',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 10
    },
    resumoLivro: {
        fontSize: 16,
        paddingLeft: 33,
        paddingRight: 32,
        paddingTop: 18,
        paddingBottom: 30,
        textAlign: 'justify'
    }
});
