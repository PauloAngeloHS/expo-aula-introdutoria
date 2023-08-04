import { loadAsync } from "expo-font";

export default Fonts = async () => {
  await loadAsync({
    "Inter-Black": require("../assets/fonts/CharisSIL-Bold.ttf"),
    "CharisSIL-Bold": require("../assets/fonts/Inter-Black.ttf"),
  });
};
