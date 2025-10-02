import { Link } from "expo-router";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { JSX, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import '../../firebase';
import { auth } from '../../firebase';

export default function LoginPage(): JSX.Element {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const createUser = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('user created successfully:', user.uid);
      return { success: true, user}
    } catch (error) {
      console.error('error creating user:');
      return { success: false};
    }
  };

  const handleAuth = async () => {
    console.log('handleAuth called');
    console.log('email: ', email);
    console.log('password', password);


    if (!email || !password) {
      console.log('fields are empty');
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    console.log('About to create user...'); // Add this
    const result = await createUser(email, password);
    console.log('Result:', result); // Add this
  
    if (result.success) {
      Alert.alert('Success', 'Account created successfully');
      clearFields();
    } else {
      Alert.alert('Failed to create account');
  }
  }

  const clearFields = () => {
    setEmail('');
    setPassword('');
  };


  return (
    <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Sign up</Text>

        {/* Create account section */}
        <Text style={styles.createHeader}>Create an account</Text>
        <Text style={styles.enterEmailHeader}>Enter an email and password to sign up for this app</Text>

        {/* First name input */}
        <TextInput
            style={styles.input}
            placeholder="First name"
            value={firstName}
            onChangeText={setFirstName}
        />

        {/* Lase name input */}
        <TextInput
            style={styles.input}
            placeholder="First name"
            value={lastName}
            onChangeText={setLastName}
        />

        {/* Email input */}
        <TextInput
            style={styles.input}
            placeholder="email@domain.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
        />

        {/* Password input */}
        <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />

        {/* Continue button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleAuth}>
            <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* OR Divider */}
        <Text style={styles.orHeader}>---or---</Text>

        {/* Guest login */}
        <Text style={styles.guestHeader}>continue as <Text style={styles.guestLink}>guest</Text></Text>

        <Link style={styles.link} href="/login">Already have an account?</Link>

        {/* Terms */}
        <Text style={styles.terms}>
            By clicking continue, you agree to our <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
        </Text>
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
    textAlign: "center",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
