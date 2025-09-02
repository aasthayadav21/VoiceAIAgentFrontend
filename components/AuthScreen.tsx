import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  onAuthSuccess: (email: string) => void;
};

const AuthScreen: React.FC<Props> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem(email);
      if (!storedUser) {
        Alert.alert("Error", "User not found. Please sign up.");
        return;
      }
      const user = JSON.parse(storedUser);
      if (user.password !== password) {
        Alert.alert("Error", "Invalid password");
        return;
      }
      Alert.alert("Success", `Welcome back, ${user.username}!`);
      onAuthSuccess(user.email);
    } catch (error) {
      Alert.alert("Error", "Something went wrong during login");
    }
  };

  const handleSignup = async () => {
    try {
      const existingUser = await AsyncStorage.getItem(email);
      if (existingUser) {
        Alert.alert("Error", "User already exists, please login.");
        return;
      }
      const newUser = { username, email, password };
      await AsyncStorage.setItem(email, JSON.stringify(newUser));
      Alert.alert("Success", "User registered successfully, now login");
      setIsLogin(true);
    } catch (error) {
      Alert.alert("Error", "Something went wrong during signup");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{isLogin ? "Login" : "Sign Up"}</Text>

        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={isLogin ? handleLogin : handleSignup}
        >
          <Text style={styles.buttonText}>
            {isLogin ? "Login" : "Sign Up"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.switchText}>
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  card: {
    width: "85%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  switchText: {
    textAlign: "center",
    color: "#007bff",
  },
});
