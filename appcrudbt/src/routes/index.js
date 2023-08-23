import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Home from "../screens/Home";
import ListarAtletas from "../screens/ListarAtletas";
import ListarArenas from "../screens/ListarArenas";
import CadastrarAtletas from "../screens/CadastrarAtletas";
import CadastrarArenas from "../screens/CadastrarArenas";
import SucessCadastro from "../screens/SucessCadastro";

const Stack = createStackNavigator();

function RootStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="ListarAtletas"
          component={ListarAtletas}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="ListarArenas"
          component={ListarArenas}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="CadastrarAtletas"
          component={CadastrarAtletas}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="CadastrarArenas"
          component={CadastrarArenas}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="SucessCadastro"
          component={SucessCadastro}
          options={{ gestureEnabled: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootStackScreen;
