import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Home = () => {
  const { featuredTracks } = useAppSelector((state) => state.tracks);
  return (
    <View style={styles.homeContainer}>
      <Text>Home</Text>
      {featuredTracks.map((track: any, index: number) => (
        <Text key={index}>{track.title}</Text>
      ))}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  homeContainer: {
    // backgroundColor: Colors.bgColor,
    height: "100%",
  },
});
