import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const Artist = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Artist {id}</Text>
    </View>
  );
};

export default Artist;
const styles = StyleSheet.create({
  auditoryContainer: {
    // backgroundColor: Colors.bgColor,
    height: "100%",
  },
});
