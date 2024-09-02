import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="auditory" />
      <Tabs.Screen name="live" />
    </Tabs>
  );
};

export default _layout;
