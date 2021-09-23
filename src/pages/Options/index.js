import React from "react";
import { StatusBar, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FooterBar from "../../components/FooterBar/OptionsFooter";

import styles from "./styles";

const Options = ({ navigation }) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0)"
        translucent
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/main-icon.png")}
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>Cyber Gênios</Text>
        </View>

        <LinearGradient
          style={styles.optionsContainer}
          colors={["#9d38c0", "#eb336b"]}
        >
          <Image
            source={require("../../assets/images/prof-picture.png")}
            style={styles.profPicture}
          />
          <Text style={styles.username}>Guilherme Tafelli</Text>
          <Text style={styles.subtitle}>aluno desde: 28/04/2019</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
            <Image style={styles.buttonIcon} source={require("../../assets/images/leave.png")} />
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </LinearGradient>

        <FooterBar navigation={navigation} />
      </View>
    </>
  );
};

export default Options;
