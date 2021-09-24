import React from "react";
import { ScrollView, Text } from "react-native";
import Lecture from "../../components/Lecture";

import styles from "./styles";

const LectureList = ({ navigation, videoList }) => {
  return (
    <>
      <Text style={styles.title}>Bem vindo, Guilherme!</Text>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        {setTimeout(() => {}, 750) && videoList.length > 0 ? (
          videoList.map((video, index) => (
            <Lecture key={index} id={video.id} navigation={navigation} />
          ))
        ) : (
          <Text style={styles.title}>Nenhuma aula foi encontrada...</Text>
        )}
      </ScrollView>
    </>
  );
};

export default LectureList;
