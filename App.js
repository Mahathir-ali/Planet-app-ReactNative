import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import Text from "./src/components/text/text";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Details from "./src/screens/details";

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("./Fonts/Antonio-Medium.ttf"),
    "LeagueSpartan-Bold": require("./Fonts/LeagueSpartan-Bold.ttf"),
    "LeagueSpartan-Regular": require("./Fonts/LeagueSpartan-Regular.ttf"),
  });

  if (!loaded) {
    return <Text>Font is Loading....</Text>;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.black,
  },
});
