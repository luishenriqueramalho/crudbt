import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./src/routes";

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
      <RootStackScreen />
    </NavigationContainer>
  );
}
