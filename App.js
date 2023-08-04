import { StyleSheet, Text, View , Image} from 'react-native';
import car from './assets/img/gdes-carro-pontiac.webp'
import { useFonts } from 'expo-font';

 

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
  });
  if (!fontsLoaded) {
    return <Text>Not loaded</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paulo Angelo HS</Text>
      <Text style={styles.title}>Banana</Text>
      <Image source={car} style={styles.image}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontFamily: 'Inter-Black',
    fontSize: 30 
  },
  image:{
    width: 50,
    height: 50
  }
});
