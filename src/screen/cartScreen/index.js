import { Text, Button, View, StyleSheet, TextInput, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
            <View
                style={styles.navBar}
            >
                <Text
                    style={styles.superiorText}
                >
                    Faça seu pedido
                </Text>
                <Text
                    style={styles.Tittle}
                >
                    Seus livros
                </Text>
            </View>
            <ScrollView
                style={styles.cartArea}
            >
                <View style={styles.txtAvisoArea}>
                    <Image style={styles.imgNotFound} source={require('../../../assets/img/notFoundCart.png')} />
                    <Text style={styles.txtAviso}>
                        Parece que não a nada aqui
                    </Text>
                    <View style={styles.txtTutorialArea}>
                        <Text style={styles.txtTutorial}>
                            se aventure! quanto mais livros mais bonita sua prateleira
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.buyBtn}
            >
                <Text
                    style={styles.buyBtnTxt}
                >Fazer Pedido</Text>
                <AntDesign name='shoppingcart' size={32} color={'white'} />

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftRowTxt: {
        fontSize: 40,
        marginTop: 62,
        marginRight: '83%',
    },
    superiorText: {
        fontWeight: 'light',
        fontSize: 16,
    },
    Tittle: {
        fontWeight: 'bold',
        fontSize: 35,
        
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
    txtAvisoArea: {
        paddingTop: 90,
        alignItems: 'center'
    },
    txtAviso: {
        opacity: 0.7,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center'
    },
    txtTutorialArea: {
        width: 220
    },
    txtTutorial: {
        textAlign: 'center',
        fontSize: 15
    },
    imgNotFound: {
        width: 100,
        height: 100
    },
    navBar: {
        marginRight: '43%',
        paddingTop: 10,
    }
});