import {StyleSheet, Text, View } from "react-native";

export default function RecipesPage() {
    return (
        <View>
            <Text style={style.createHeader}>Recipes go here</Text>
            <Text style={style.recipeHeader}>Recipe 1</Text>
            <Text style={style.recipeHeader}>Recipe 2</Text>
            <Text style={style.recipeHeader}>Recipe 3</Text>
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
    recipeHeader: {
        textAlign: "center",
        marginTop: 50,
        fontSize: 15,
    },
})