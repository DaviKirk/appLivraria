import { Text, Button, View, StyleSheet, TextInput, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function Index({ navigation }) {

    return (
        <View style={styles.container}>
            <View
                style={styles.navBar}
            >
                <TextInput style={styles.searchBox}
                placeholder='Pesquisar'
                >

                </TextInput>
                <TouchableOpacity
                    style={styles.btnHome}
                    onPress={() =>
                      navigation.navigate('homeScreen', {name: 'homeScreen'})
                    }
                >
                    <Text
                        style={styles.txtBtn}
                    >H</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.imgNav} source={require('../../../assets/imageNav.png')} />

            <ScrollView>

            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3060BB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgNav: {
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
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: '#000000',
        width: 295,
        height: 43,
        marginRight: 5,
        marginTop: 24,
        paddingLeft: 30,
        fontSize: 16
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
        marginTop: 24,
    },
});