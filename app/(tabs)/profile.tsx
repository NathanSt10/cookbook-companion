import { router } from "expo-router";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { auth } from "../../firebase";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      console.log("Attempting logout...");

      await signOut(auth);
      console.log("Logout successful");
      
      router.replace("/");
    } 
    catch (e: any) {
      console.error("Logout error:", e);
      Alert.alert("Logout failed", e?.message ?? "Please try again.");
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Profile Page</Text>
      
      <Pressable
        onPress={handleLogout}
        disabled={loading}
        style={{
          backgroundColor: loading ? "gray" : "red",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          {loading ? "Logging out..." : "LOGOUT"}
        </Text>
      </Pressable>
    </View>
  );
}