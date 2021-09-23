import React, { useState } from "react";
import { StatusBar, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FooterBar from "../../components/FooterBar/HomeFooter";
import LectureList from "../../components/LectureList";

import styles from "./styles";

const Home = ({ navigation }) => {
  const [videoList, setVideoList] = useState([
    { id: "j942wKiXFu8" },
    { id: "kVeOpcw4GWY" },
    { id: "9D1x7-2FmTA" },
    { id: "pnhO8UaCgxg" },
    { id: "0sSYmRImgRY" },
    { id: "NbTrGcz4DW8" },
    { id: "0XSDAup85SA" },
  ]);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
        translucent
      />
      <LinearGradient
        colors={["rgb(155, 56, 195)", "rgb(238, 51, 104)"]}
        start={[1, 0]}
        end={[0, 1]}
        style={styles.container}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/main-icon.png")}
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>Cyber Gênios</Text>
        </View>

        <LectureList videoList={videoList} navigation={navigation} />

        <FooterBar navigation={navigation} />
      </LinearGradient>
    </>
  );
};

export default Home;
