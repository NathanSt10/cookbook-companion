import { Link, router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
        router.replace("/");
    } 
      catch (e: any) {
        Alert.alert("Login error." + e)
    } 
      finally {
        setLoading(false);
    }
  };

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Cookbook Companion</Text>

      <TextInput
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={ styles.input }
      />

      <TextInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={ styles.input }
      />

      <Pressable
        onPress={onLogin}
        disabled={loading}
        style={ styles.continueButton }
      >
        <Text 
          style={ styles.continueButtonText }>
              Login
        </Text>
      </Pressable>

      <Text style={ styles.orHeader }> 
        -----or-----
      </Text>

      <Text style={ styles.guestHeader }>
        continue as <Text style={ styles.guestLink }>
          guest
          </Text>
      </Text>

      <TouchableOpacity style={ styles.socialButton}>
        <Text style={ styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={ styles.socialButton}>
          <Text style={ styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <Link href="/signup">No account? Sign up here</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  createHeader: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  enterEmailHeader: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 20,
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: "black",
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 20,
  },
  continueButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  orHeader: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 14,
    color: "#666",
  },
  guestHeader: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 13,
  },
  guestLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  socialButton: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 10,
  },
  socialButtonText: {
    textAlign: "center",
    fontSize: 16,
  },
  terms: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 12,
    color: "#666",
  },
  link: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});