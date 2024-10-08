import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "react-native";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setFeaturedTracks, setStoreTracks } from "./store/tracksSlice";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <RootLayoutNav />
      </Provider>
    </>
  );
}

function RootLayoutNav() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    const url: string =
      "https://multiple-expressions-backend.onrender.com/api/music/tracks/setup/featured";

    try {
      setLoading(true);
      await fetch(url).then((response) => {
        return response
          .json()
          .then((data) => dispatch(setFeaturedTracks(data)));
      });
      setLoading(false);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return null;
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
