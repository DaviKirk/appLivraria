import { Text, View, StyleSheet, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>

        <Image style={styles.imageLogo} source={require('../../../assets/iconLivraria.png')} />

        <TextInput
        style={styles.TextInput}
        type="text"
        placeholder='Numero de telefone'
        ></TextInput>

         <TextInput
        style={styles.TextInput}
        type="text"
        placeholder='Numero de telefone'
        ></TextInput>

        <TouchableOpacity
        style={styles.ButtonLogin}
        >
          <Text
          style={styles.textButton}
          >Logar</Text>
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
  imageLogo: {
    width: 183,
    height: 202,
    marginBottom: 27,
  },
  TextInput: {
    marginTop: 40,
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
    marginTop: 89
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: "bold",
  },

});