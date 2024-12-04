import { Text, Button, View, StyleSheet, Dimensions, FlatList, TextInput, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';

import React, { useState, useRef } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// Obtém a largura da tela do dispositivo para uso no layout
const { width: screenWidth } = Dimensions.get('window');


export default function Index({ navigation }) {

    // Estado que armazena os dados do carrossel
    const [data] = useState([
        {
            id: 1,
            img: 'https://m.media-amazon.com/images/I/816Udvs9O7L._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: 2,
            img: 'https://m.media-amazon.com/images/I/715h8DWokhL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: 3,
            img: 'https://m.media-amazon.com/images/I/81ehX6Quw2L.jpg'
        },
    ]);

    // Cria uma referência para o FlatList
    const flatListRef = useRef(null);

    // Estado para controlar o slide ativo (índice)
    const [activeIndex, setActiveIndex] = useState(0);

    // Função chamada ao rolar o carrossel
    const onScroll = (event) => {
        // Calcula o índice do slide com base na posição de rolagem
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
        setActiveIndex(slideIndex); // Atualiza o índice do slide ativo
    };

    // Renderiza cada item da lista de slides
    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            {/* Exibe a imagem do slide */}
            <Image source={{ uri: item.img }} style={styles.image} />
        </View>
    );


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

            <Text style={styles.txtMaisVendidos}>Os mais vendidos</Text>

            <View style={styles.container}>
                {/* Carrossel com slides */}
                <FlatList
                    ref={flatListRef} // Conecta a referência ao FlatList
                    data={data} // Dados do carrossel
                    renderItem={renderItem} // Função que renderiza cada item
                    horizontal // Define o layout horizontal
                    pagingEnabled // Faz com que o scroll pare em cada slide
                    showsHorizontalScrollIndicator={false} // Remove o indicador de rolagem
                    keyExtractor={(item) => item.id.toString()} // Garante chaves únicas para os itens
                    onScroll={onScroll} // Chama a função de detecção do slide ativo
                    style={styles.flatList} // Estilo para o FlatList
                />

                {/* Indicadores de navegação do carrossel */}
                <View style={styles.indicatorContainer}>
                    <View style={styles.indicators}>
                        {data.map((_, index) => (
                            <View
                                key={index} // Identificador único para cada indicador
                                style={[
                                    styles.indicator, // Estilo base do indicador
                                    activeIndex === index && styles.activeIndicator, // Adiciona estilo ativo se for o índice atual
                                ]}
                            />
                        ))}

                    </View>
                </View>
            </View>

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
                            source={require('../../../assets/img/books/DomQuixote.jpg')}
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
    flatList: {
        flexGrow: 0, // Garante que o FlatList não expanda para além de seu conteúdo
        marginTop: 20
    },
    slide: {
        width: screenWidth, // Cada slide ocupa a largura da tela
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
    },
    image: {
        width: screenWidth * 0.46, // Largura da imagem é 80% da tela
        height: screenWidth * 0.7, // Altura é proporcional à largura
        borderRadius: 10, // Bordas arredondadas
    },
    indicators: {
        flexDirection: 'row', // Disposição horizontal dos indicadores
        marginTop: 10, // Espaço acima dos indicadores
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: '#333',
    },
    indicatorContainer: {
        alignItems: 'center'
    }
});