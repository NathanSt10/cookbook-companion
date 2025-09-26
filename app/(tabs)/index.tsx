import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Recipes From the Fridge</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search recipes or ingredients..."
          style={styles.searchInput}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Ingredients in fridge */}
        <Text style={styles.sectionTitle}>Your Ingredients</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 10 }}>
          <View style={styles.ingredientChip}><Text style={styles.chipText}>Eggs</Text></View>
          <View style={styles.ingredientChip}><Text style={styles.chipText}>Tomatoes</Text></View>
          <View style={styles.ingredientChip}><Text style={styles.chipText}>Chicken</Text></View>
          <View style={styles.ingredientChip}><Text style={styles.chipText}>Spinach</Text></View>
          <View style={styles.ingredientChip}><Text style={styles.chipText}>Cheese</Text></View>
        </ScrollView>

        {/* Suggested Recipes */}
        <Text style={styles.sectionTitle}>Recipes For You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.recipeCard}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" }}
              style={styles.recipeImage}
            />
            <Text style={styles.recipeTitle}>Avocado Toast</Text>
          </View>
          <View style={styles.recipeCard}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" }}
              style={styles.recipeImage}
            />
            <Text style={styles.recipeTitle}>Pasta Primavera</Text>
          </View>
          <View style={styles.recipeCard}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1605478571920-74b90cda44bb" }}
              style={styles.recipeImage}
            />
            <Text style={styles.recipeTitle}>Lemon Cake</Text>
          </View>
        </ScrollView>

        {/* Past Recipes */}
        <Text style={styles.sectionTitle}>Previously Made</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.pastRecipeCard}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1512058564366-c9e3e0464b8b" }}
              style={styles.pastImage}
            />
            <Text style={styles.recipeTitle}>Grilled Chicken</Text>
          </View>
          <View style={styles.pastRecipeCard}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1506086679526-a687b5c1e1f0" }}
              style={styles.pastImage}
            />
            <Text style={styles.recipeTitle}>Veggie Omelette</Text>
          </View>
        </ScrollView>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Browse by Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Breakfast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Lunch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Dinner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Desserts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Snacks</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>

      {/* Footer nav bar */}
      <View style={styles.footer}>
        <Ionicons name="home" size={24} />
        <Ionicons name="calendar-outline" size={24} />
        <Ionicons name="cart-outline" size={24} />
        <Ionicons name="notifications-outline" size={24} />
        <Ionicons name="person-outline" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { marginTop: 40, paddingHorizontal: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 20,
  },
  searchInput: { flex: 1, padding: 8, marginLeft: 5 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  ingredientChip: {
    backgroundColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginHorizontal: 6,
  },
  chipText: { fontSize: 14 },
  recipeCard: {
    width: 160,
    marginHorizontal: 10,
  },
  recipeImage: {
    width: "100%",
    height: 110,
    borderRadius: 10,
  },
  recipeTitle: { marginTop: 6, fontSize: 14, fontWeight: "500" },
  pastRecipeCard: {
    width: 140,
    marginHorizontal: 10,
  },
  pastImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  category: {
    backgroundColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  categoryText: { fontSize: 14, fontWeight: "500" },
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
