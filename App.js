import { useState } from "react";
import Fonts from "./components/Fonts";
import { StyleSheet, Text, View, Image } from "react-native";
import car from "./assets/img/gdes-carro-pontiac.webp";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async (finished) => {
    await Fonts();
    finished(true);
  };

  LoadFonts(SetIsReady);

  if (!IsReady) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paulo Angelo HS</Text>
      <Text style={styles.paragraf}>Banana</Text>
      <Image source={car} style={styles.image}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "Inter-Black",
    fontSize: 30,
  },
  paragraf: {
    color: "#fff",
    fontFamily: "CharisSIL-Bold",
    fontSize: 30,
  },
  image: {
    width: 50,
    height: 50,
  },
});
