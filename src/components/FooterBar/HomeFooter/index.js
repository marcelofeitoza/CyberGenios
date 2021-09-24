import React from "react";
import { TouchableOpacity, View, Image } from "react-native";

import styles from "./styles";

const FooterBar = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Image
          source={require("../../../assets/images/video-selected.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Options")}
      >
        <Image
          source={require("../../../assets/images/options.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FooterBar;
