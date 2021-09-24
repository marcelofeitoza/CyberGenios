import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

import styles from "./styles";

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContent}>
        <Image
          source={require("../../assets/images/return.png")}
          style={styles.icon}
        />
        <Text style={styles.headerText}>{ title }</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
