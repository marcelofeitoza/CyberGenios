import React, { useState } from "react";
import { Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/pages/Login/index";
import VideoPlayer from "./src/pages/VideoPlayer/index";
import Home from "./src/pages/Home/index";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar barStyle="auto" backgroundColor="#2b2b2b" />
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
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: "#2b2b2b",
              },
              headerTintColor: "#fff",
            }}
            name="VideoPlayer"
            component={VideoPlayer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
