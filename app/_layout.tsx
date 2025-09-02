import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthScreen from "../components/AuthScreen";
import { Tabs } from "expo-router";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem("loggedInUser");
      setLoggedIn(!!user);
      setIsLoading(false);
    };
    checkLogin();
  }, []);

  const handleAuthSuccess = async (email: string) => {
    await AsyncStorage.setItem("loggedInUser", email);
    setLoggedIn(true);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!loggedIn) {
    return <AuthScreen onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <Tabs>
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
