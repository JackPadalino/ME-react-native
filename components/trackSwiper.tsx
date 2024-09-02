import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";

const TrackSwiper = () => {
  const { featuredTracks } = useAppSelector((state) => state.tracks);
  return (
    <Swiper showsButtons={true}>
      {featuredTracks.map((track: any, index: number) => (
        <View style={styles.slide}>
          <Text key={index} style={styles.text}>
            {track.title}
          </Text>
        </View>
      ))}
    </Swiper>
  );
};

export default TrackSwiper;
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
