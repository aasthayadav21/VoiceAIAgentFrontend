import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function ExploreDetails() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#00c6ff", "#6a11cb"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View entering={FadeInUp.duration(800)} style={styles.card}>
          <Text style={styles.title}>Deep Dive: Voice AI Agent</Text>
          <Text style={styles.text}>
            Our Voice AI Agent lets you interact naturally using your voice. 
            Explore its real-time capabilities, voice recognition accuracy, 
            and advanced AI-driven conversation. It’s designed to make your 
            digital experience seamless and smart.
          </Text>

          <Text style={styles.subTitle}>Features:</Text>
          <Text style={styles.text}>• Real-time conversation</Text>
          <Text style={styles.text}>• Smart AI responses</Text>
          <Text style={styles.text}>• Multi-language support</Text>
          <Text style={styles.text}>• Personalized assistant</Text>

          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    padding: 25,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    color: "#f1f1f1",
    lineHeight: 22,
    marginBottom: 8,
  },
  backBtn: {
    marginTop: 20,
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  backText: {
    color: "#2575fc",
    fontWeight: "600",
    fontSize: 16,
  },
});
