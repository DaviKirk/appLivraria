import { Text, View, StyleSheet, TextInput, Image } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('')} /> 
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
});