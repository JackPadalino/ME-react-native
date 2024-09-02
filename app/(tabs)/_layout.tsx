import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "",
        // headerStyle: {
        //   backgroundColor: Colors.black,
        // },

        tabBarStyle: {
          // backgroundColor: Colors.black,
          paddingTop: 10,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="auditory"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="multitrack-audio" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="live-tv" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
