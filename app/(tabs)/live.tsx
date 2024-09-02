import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const Live = () => {
  return (
    <View style={styles.liveContainer}>
      <Text>Live</Text>
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
