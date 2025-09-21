import {StyleSheet, Text, View } from "react-native";

export default function CalendarPage() {
    return (
        <View>
            <Text style={style.createHeader}>Meal Planner Calendar</Text>
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