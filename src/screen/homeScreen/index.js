import { Text, Button, View, StyleSheet, TextInput, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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
                        onPress={() =>
                            navigation.navigate('searchScreen', { name: 'searchScreen' })
                        }
                    >Pesquisar</Text>
                    <Ionicons name='search' size={25} paddingLeft={6} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnCarrinho}
                    onPress={() =>
                        navigation.navigate('cartScreen', { name: 'cartScreen' })
                    }
                >
                    <Text
                        style={styles.txtBtn}
                    >carrinho</Text>
                    <Ionicons name='cart-outline' size={25} paddingLeft={6} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnHome}
                >
                    <Feather name='home' size={25} style={styles.txtBtn} />

                </TouchableOpacity>
            </View>
            <Image style={styles.imgNav} source={require('../../../assets/imageNav.png')} />

            {/* espaço para colocar o Snap */}

            <Text style={styles.txtMaisVendidos}>Os mais vendidos</Text>

            <View style={{ backgroundColor: '#fff', marginTop: 30 }}>
                <Text style={styles.titulosLivros}
                >Nacionais</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.listaHorizontal}
                >
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            source={require('../../../assets/img/books/domCasmurro.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/grande.jpg')}
                        /></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/horaEstrela.jpg')}
                        /></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/macunaina.jpg')}
                        /></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/paixãoSegunda.jpg')}
                        /></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/romanceiro.jpg')}
                        /></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/vidasSecas.jpg')}
                        /></TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ backgroundColor: '#fff', marginTop: 30 }}>
                <Text style={styles.titulosLivros}
                >Best-Seller</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.listaHorizontal}
                >
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            source={require('../../../assets/img/books/domCasmurro.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/grande.jpg')}
                        /></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/horaEstrela.jpg')}
                        /></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/macunaina.jpg')}
                        /></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/paixãoSegunda.jpg')}
                        /></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/romanceiro.jpg')}
                        /></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                        }
                    >
                        <Image
                            style={styles.livroH}
                            onPress={() =>
                                navigation.navigate('favoritScreen', { name: 'favoritScreen' })
                            }
                            source={require('../../../assets/img/books/vidasSecas.jpg')}
                        /></TouchableOpacity>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3060BB',
        display: 'flex',
    },
    imgNav: {
        height: 53,
        width: '100%',
        marginTop: -8
    },
    navBar: {
        paddingTop: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 120,
    },
    btnPesquisar: {
        flexDirection: 'row',
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: '#000000',
        width: 146,
        height: 43,
    },
    btnHome: {
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
    },
    listaHorizontal: {
        height: 230,
        backgroundColor: '#fff',
    },
    livroH: {
        width: 124,
        height: 200,
        backgroundColor: '#000',
        marginLeft: 18,
        borderRadius: 5,
        marginTop: 6
    },
    titulosLivros: {
        fontSize: 30,
        fontWeight: '300',
        textAlign: 'center'
    },
    txtMaisVendidos: {
        fontSize: 30,
        fontWeight: '300',
        textAlign: 'center',
        color: '#fff',
        marginTop: 15,
    },
});