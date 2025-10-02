import { Link, router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { auth } from "../../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setErr(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/");
    } 
      catch (e: any) {
      setErr(e.message ?? "Login error");
    } 
      finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center", gap: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 8 }}>
        Login
      </Text>

      <TextInput
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />

      <TextInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />

      {err ? <Text style={{ color: "red" }}>{err}</Text> : null}

      <Pressable
        onPress={onLogin}
        disabled={loading}
        style={{
          backgroundColor: "#111827",
          padding: 14,
          borderRadius: 10,
          alignItems: "center",
          opacity: loading ? 0.6 : 1,
        }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>
          {loading ? "Signing in..." : "Sign in"}
        </Text>
      </Pressable>

      <Link href="/signup">No account? Sign up here</Link>

    </View>
  );
}
