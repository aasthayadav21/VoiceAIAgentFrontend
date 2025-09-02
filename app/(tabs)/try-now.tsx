import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function TryNow() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#ff9a9e", "#fad0c4"]}
      style={styles.container}
    >
      <Animated.View entering={FadeInUp.duration(800)} style={styles.card}>
        {/* Circle with robot image */}
        <View style={styles.robotCircle}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/4712/4712067.png",
            }}
            style={styles.robotImage}
          />
        </View>

        {/* Card content */}
        <Text style={styles.title}>Try the Voice AI Agent</Text>
        <Text style={styles.description}>
          Interact with our AI Robot and explore its voice capabilities. 
          Get a quick demonstration of real-time voice interactions!
        </Text>

        {/* Back button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  robotCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  robotImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#f1f1f1",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 25,
  },
  backBtn: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ff6f61",
  },
});
