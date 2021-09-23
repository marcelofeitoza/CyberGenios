import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import styles from "./styles";

const FooterBar = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../../../assets/images/video.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../../assets/images/options-selected.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FooterBar;
