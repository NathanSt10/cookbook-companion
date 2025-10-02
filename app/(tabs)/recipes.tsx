import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RecipePage() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Recipe Image */}
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" }}
          style={styles.image}
        />

        {/* Title + Info */}
        <View style={styles.header}>
          <Text style={styles.title}>Pasta Primavera</Text>
          <Text style={styles.subtitle}>30 min · Serves 2</Text>
        </View>

        {/* Action buttons */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="heart-outline" size={22} />
            <Text style={styles.iconText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="bookmark-outline" size={22} />
            <Text style={styles.iconText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="add-circle-outline" size={22} />
            <Text style={styles.iconText}>Collection</Text>
          </TouchableOpacity>
        </View>

        {/* Ingredients */}
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• 200g pasta</Text>
          <Text style={styles.listItem}>• 1 cup cherry tomatoes</Text>
          <Text style={styles.listItem}>• 1 zucchini, sliced</Text>
          <Text style={styles.listItem}>• 2 cloves garlic</Text>
          <Text style={styles.listItem}>• Olive oil, salt, pepper</Text>
        </View>

        {/* Instructions */}
        <Text style={styles.sectionTitle}>Instructions</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>1. Cook pasta until al dente.</Text>
          <Text style={styles.listItem}>2. Sauté garlic and veggies in olive oil.</Text>
          <Text style={styles.listItem}>3. Add tomatoes and seasonings.</Text>
          <Text style={styles.listItem}>4. Toss pasta with veggies and serve.</Text>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 240 },
  header: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  subtitle: { fontSize: 14, color: "gray", marginTop: 5 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  iconButton: { alignItems: "center" },
  iconText: { fontSize: 12, marginTop: 2 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  list: { marginHorizontal: 20 },
  listItem: { fontSize: 15, marginBottom: 8 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  footerButton: { alignItems: "center" },
});
