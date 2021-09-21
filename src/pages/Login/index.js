import React from "react";
import { Text, View, Image } from "react-native";

import styles from "./styles";

import LoginForm from '../../components/LoginForm'

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/main-icon.png")}
          style={styles.logo}
        />
        <View>
          <Text style={styles.title}>Cyber</Text>
          <Text style={styles.title}>Gênios</Text>
        </View>
      </View>

      <LoginForm />
    </View>
  );
};

export default Login;
