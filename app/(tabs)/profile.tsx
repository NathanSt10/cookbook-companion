import {StyleSheet, Text, View } from "react-native";

export default function ProfilePage() {
    return (
      <View>
        <Text style={style.createHeader}>Profile page</Text>
      </View>
    );
}
const style = StyleSheet.create({
    createHeader: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        paddingVertical: 250,
    },
})