import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as Auth from "../../auth";

export default function ExploreScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await Auth.logout();
    globalThis.location.reload(); // refresh layout to show login
  };

  const handleExplore = () => {
    router.push("/explore-details"); // navigate to new page
  };

  const handleTryNow = () => {
    router.push("/try-now"); //naviagte to try-now page
  };

  return (
    <LinearGradient
      colors={["#6a11cb", "#2575fc", "#00c6ff"]}
      style={styles.container}
    >
      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={26} color="#fff" />
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.contentBox}>
        <Text style={styles.title}>Voice AI Agent</Text>
        <Text style={styles.description}>
          Experience the power of real-time conversation with our advanced Voice
          AI Agent. Seamlessly interact, explore features, and enjoy a smarter
          digital assistant.
        </Text>

        {/* Explore Button */}
        <TouchableOpacity style={styles.exploreBtn} onPress={handleExplore}>
          <Text style={styles.exploreText}>Explore</Text>
        </TouchableOpacity>

        {/* Try Now Button */}
        <TouchableOpacity style={styles.tryNowBtn} onPress={handleTryNow}>
          <Text style={styles.tryNowText}>Try Now</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutBtn: {
    position: "absolute",
    top: 60,
    right: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 10,
    borderRadius: 50,
  },
  contentBox: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 20,
    padding: 25,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#f1f1f1",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 22,
  },
  exploreBtn: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
  },
  exploreText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2575fc",
  },
  tryNowBtn: {
    backgroundColor: "#ffb74d",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  tryNowText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
