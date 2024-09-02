import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const Auditory = () => {
  return (
    <View style={styles.auditoryContainer}>
      <Text>Auditory</Text>
    </View>
  );
};

export default Auditory;
const styles = StyleSheet.create({
  auditoryContainer: {
    backgroundColor: Colors.bgColor,
    height: "100%",
  },
});
