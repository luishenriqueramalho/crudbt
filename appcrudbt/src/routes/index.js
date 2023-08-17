import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Home from "../screens/Home";

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
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootStackScreen;
