import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./src/routes";
import { StatusBar } from "react-native";

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <RootStackScreen />
    </NavigationContainer>
  );
}
