import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "",
        // headerStyle: {
        //   backgroundColor: Colors.black,
        // },
        // tabBarStyle: {
        //   backgroundColor: Colors.black,
        // },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="auditory" />
      <Tabs.Screen name="live" />
    </Tabs>
  );
};

export default _layout;
