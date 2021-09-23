import React from "react";
import { ScrollView, Text, View } from "react-native";
import Lecture from "../../components/Lecture";

import styles from "./styles";

const LectureList = ({ navigation, videoList }) => {
  //console.log(videoList);

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
        {setTimeout(() => {}, 1250) && videoList.length > 0 ? (
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
