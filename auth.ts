// auth.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export const logout = async () => {
  await AsyncStorage.removeItem("loggedInUser");
};
