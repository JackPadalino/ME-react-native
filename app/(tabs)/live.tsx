import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const Live = () => {
  return (
    <View style={styles.liveContainer}>
      <Text>Live</Text>
      <Link href="/artist/3">Artist</Link>
    </View>
  );
};

export default Live;
const styles = StyleSheet.create({
  liveContainer: {
    backgroundColor: Colors.bgColor,
    height: "100%",
  },
});
