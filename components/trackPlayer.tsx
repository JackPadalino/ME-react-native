import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { selectPlayingTrack } from "@/app/store/tracksSlice";

const TrackPlayer = () => {
  const { playingTrack } = useAppSelector((state) => state.tracks);
  if (Object.keys(playingTrack).length > 0)
    return (
      <>
        <View style={styles.trackPlayerContainer}>
          <Text style={styles.trackPlayerContainer}>{playingTrack.title}</Text>
        </View>
      </>
    );
};

export default TrackPlayer;
const styles = StyleSheet.create({
  trackPlayerContainer: {
    backgroundColor: "red",
  },
});
