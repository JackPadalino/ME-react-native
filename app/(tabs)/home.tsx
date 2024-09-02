import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Text>Home</Text>
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
