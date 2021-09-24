import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import Header from "../../components/HeaderBar";

import YoutubePlayer from "react-native-youtube-iframe";

import styles from "./styles";

const VideoPlayer = ({ navigation, route }) => {
  const { videoId, title, description, channelTitle } = route.params;

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0)"
        translucent
      />

      <Header navigation={navigation} title={title} />

      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <YoutubePlayer
            height={"100%"}
            width={"100%"}
            videoId={videoId}
            play={false}
          />

          <View style={styles.videoDetailsContainer}>
            <View styles={styles.videoTitle}>
              <Text style={styles.videoTitleText}>{title}</Text>
            </View>

            <ScrollView styles={styles.videoDescription}>
              <Text style={styles.videoDescriptionText}>{description}</Text>
            </ScrollView>

            <View styles={styles.videoAdditional}>
              <Text style={styles.videoAdditionalText}>{channelTitle}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default VideoPlayer;
