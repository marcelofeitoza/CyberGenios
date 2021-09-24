import React, { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

const Lecture = ({ navigation, id }) => {
  const [videoDetails, setVideoDetails] = useState({});

  useEffect(() => {
    async function getVideoDetails(id) {
      let response = await fetch(
        `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${id}&format=json`
      );
      let data = await response.json();
      setVideoDetails(data);
    }

    getVideoDetails(id);
  }, []);

  const navigateToVideo = () => {
    navigation.navigate("VideoPlayer", {
      videoId: id,
      title: videoDetails.title,
      description: videoDetails.html,
      channelTitle: videoDetails.author_name,
    });
  };

  return (
    <TouchableOpacity
      onPress={() => navigateToVideo(videoDetails)}
      style={styles.lecture}
    >
      <Image
        style={styles.thumbnail}
        source={{
          uri: videoDetails === undefined ? "" : videoDetails.thumbnail_url,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {videoDetails === undefined ? "Loading..." : videoDetails.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Lecture;
