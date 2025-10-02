import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../../firebase";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      Alert.alert("Attempting logout...");

      await signOut(auth);
        Alert.alert("Logout successful");
      
        router.replace("/");
    } 
    catch (e: any) {
      Alert.alert("Logout error:", e);
      Alert.alert("Logout failed", e?.message ?? "Please try again.");
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile header */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://i.pravatar.cc/300" }} // Replace with user profile image
          style={styles.avatar}
        />
        <Text style={styles.name}>Karen Lee</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>edit profile</Text>
        </TouchableOpacity>
    </View>
    {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Collections</Text>
        <Text style={styles.tab}>Recipes</Text>
        <Text style={styles.tab}>Liked</Text>
        <Text style={styles.tab}>Saved</Text>
      </View>

      {/* Create new collection */}
      <View style={styles.newCollection}>
        <Ionicons name="add" size={20} color="black" />
        <Text style={styles.newText}>Create new collection</Text>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </View>

      {/* Example collection card */}
      <View style={styles.collectionCard}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1605478571920-74b90cda44bb",
          }}
          style={styles.collectionImage}
        />
        <Text style={styles.collectionTitle}>fav desserts</Text>
      </View>

      <Pressable
        onPress={handleLogout}
        disabled={loading}
        style={ styles.logButton }
      >
        <Text style={ styles.logButtonText }> </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  profileHeader: {
    alignItems: "center",
    marginTop: 40,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  editButton: {
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },

  logButton: {
    backgroundColor: "black",
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 20,
  },

  logButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  editText: {
    color: "white",
    fontSize: 14,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
  },

  tab: {
    fontSize: 16,
    color: "gray",
  },

  activeTab: {
    color: "black",
    fontWeight: "bold",
  },

  newCollection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  newText: {
    fontSize: 15,
    flex: 1,
    marginLeft: 8,
  },

  collectionCard: {
    margin: 20,
    width: 120,
  },

  collectionImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },

  collectionTitle: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "500",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
  },
});