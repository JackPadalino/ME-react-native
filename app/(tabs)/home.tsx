import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "@/constants/Colors";
// import TrackSwiper from "@/components/trackSwiper";
import Swiper from "react-native-swiper";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Home = () => {
  const { featuredTracks } = useAppSelector((state) => state.tracks);
  const activeIndex = useRef<number>(0);
  const handleSlideChange = (index: number) => {
    activeIndex.current = index;
    // console.log(activeIndex.current);
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.swiperContainer}>
        <Swiper
          showsButtons={false}
          showsPagination={false}
          onIndexChanged={(index) => handleSlideChange(index)}
        >
          {featuredTracks.map((track: any, index: number) => (
            <View style={swiperStyles.slide}>
              <Image
                source={{ uri: track.track_photo }}
                style={swiperStyles.trackImg}
              />
              <Text key={index} style={swiperStyles.text}>
                {track.title}
              </Text>
            </View>
          ))}
        </Swiper>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  homeContainer: {
    // backgroundColor: Colors.bgColor,
    height: "100%",
    alignItems: "center",
  },
  swiperContainer: {
    marginTop: 10,
    width: 350,
    height: 350,
  },
});

const swiperStyles = StyleSheet.create({
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
  trackImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
