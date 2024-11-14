import { Text, View, StyleSheet, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Index({navigation}) {
    return (
        <View style={styles.container}>

            <Image style={styles.imageLogo} source={require('../../../assets/iconLivraria.png')} />

            <TextInput
                style={styles.TextInput}
                type="text"
                placeholder='Nome completo'
            ></TextInput>

            <TextInput
                style={styles.TextInput}
                type="text"
                placeholder='Numero de telefone'
            ></TextInput>

            <TextInput
                style={styles.TextInput}
                type="text"
                placeholder='Senha'
                secureTextEntry={true}
            ></TextInput>

            <TextInput
                style={styles.TextInput}
                type="text"
                placeholder='Data de nascimento'
            ></TextInput>



            <TouchableOpacity
                style={styles.ButtonLogin}
            >
                <Text
                    style={styles.textButton}
                >Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text
                    style={styles.alterarConta}
                    onPress={() =>
                        navigation.navigate('loginScreen', {name: 'loginScreen'})
                      }
                >Não possuo uma conta</Text>
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
    text: {
        color: '#000',
    },
    alterarConta: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 25,
    },
    imageLogo: {
        width: 183,
        height: 202,
        marginBottom: 27,
        marginTop: 20,
    },
    TextInput: {
        marginTop: 20,
        width: 333,
        height: 56,
        borderWidth: 2,
        borderColor: '#808080',
        borderRadius: 20,
        fontWeight: "bold",
        fontSize: 18,
        paddingLeft: 25,
    },
    ButtonLogin: {
        width: 333,
        height: 71,
        backgroundColor: '#123093',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        lineHeight: 69,
        marginTop: 20
    },
    textButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",
    },

});