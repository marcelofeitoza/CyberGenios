import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";

const LoginForm = () => {
  return (
    <View style={styles.loginForm}>
      <View style={styles.inputUsername}>
        <Text style={styles.inputPlaceholder}>Email ou usuário</Text>
        <TextInput
          style={styles.inputText}
          placeholder="email@exemplo.com"
          placeholderTextColor="rgba(0,0,0,0.5)"
          paddingLeft={20}
        />
      </View>

      <View style={styles.inputPassword}>
        <Text style={styles.inputPlaceholder}>Senha</Text>
        <TextInput
          style={styles.inputText}
          placeholder="********"
          placeholderTextColor="rgba(0,0,0,0.5)"
          paddingLeft={20}
        />
      </View>

      <LinearGradient
        colors={["#00b4db", "#0083b0"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.forgot}>Não consegue entrar?</Text>
      </LinearGradient>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
