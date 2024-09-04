import React from "react";
import { Text, View } from "react-native";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const _layout = () => {
  const tabBarHeight = 100;
  return (
    <>
      <Tabs
        screenOptions={{
          headerTitle: "",
          // headerStyle: {
          //   backgroundColor: Colors.black,
          // },

          tabBarStyle: {
            // backgroundColor: Colors.black,
            paddingTop: 10,
            height: tabBarHeight,
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
      <View
        style={{
          position: "absolute",
          bottom: tabBarHeight,
          backgroundColor: "red",
          width: "100%",
        }}
      >
        <Text>This is a test</Text>
      </View>
    </>
  );
};

export default _layout;
