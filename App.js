import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/pages/Login/index";
import VideoPlayer from "./src/pages/VideoPlayer/index";
import Home from "./src/pages/Home/index";
import Options from "./src/pages/Options/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Options"
          component={Options}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VideoPlayer"
          component={VideoPlayer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
