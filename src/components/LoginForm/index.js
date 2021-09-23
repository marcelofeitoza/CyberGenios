import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";

const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState("guitafelli");
  const [password, setPassword] = useState("testing");

  const handleLogin = () => {
    if (username === "guitafelli" && password === "testing") {
      navigation.navigate("Home") && setUsername("") && setPassword("");
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  return (
    //<View style={styles.loginForm}>
    <LinearGradient
      colors={["rgb(155, 56, 195)", "rgb(238, 51, 104)"]}
      start={[1, 0]}
      end={[0, 1]}
      style={styles.loginForm}
    >
      <View style={styles.inputUsername}>
        <Text style={styles.inputPlaceholder}>Email ou usuário</Text>
        <TextInput
          style={styles.inputText}
          placeholder="email@exemplo.com"
          placeholderTextColor="rgba(0,0,0,0.8)"
          paddingLeft={20}
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputPassword}>
        <Text style={styles.inputPlaceholder}>Senha</Text>
        <TextInput
          style={styles.inputText}
          placeholder="********"
          placeholderTextColor="rgba(0,0,0,0.8)"
          paddingLeft={20}
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Não consegue entrar?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    </LinearGradient>
    //</View>
  );
};

export default LoginForm;
