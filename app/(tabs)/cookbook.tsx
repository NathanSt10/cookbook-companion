import {StyleSheet, Text, View } from "react-native";

export default function CookbookPage() {
    return (
        <View>
            <Text style={style.createHeader}>Cook Book</Text>
        </View>
    )
}
const style = StyleSheet.create({
    createHeader: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        paddingVertical: 250,
    },
})