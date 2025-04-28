import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  { id: "1", name: "Main Course", icon: "cutlery" },
  { id: "2", name: "Breakfast", icon: "coffee" },
  { id: "3", name: "Dessert", icon: "birthday-cake" },
  { id: "4", name: "Drinks", icon: "glass" },
  { id: "5", name: "Appetizers", icon: "lemon-o" },
  { id: "6", name: "Salads", icon: "leaf" },
  { id: "7", name: "Soups", icon: "spoon" },
  { id: "8", name: "Seafood", icon: "anchor" },
  { id: "9", name: "Vegetarian", icon: "pagelines" },
  { id: "10", name: "Pasta", icon: "circle-o" },
  { id: "11", name: "Baking", icon: "pie-chart" },
  { id: "12", name: "Grilling", icon: "fire" },
];

export default function CategoryScreen() {
  const router = useRouter();

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <View style={styles.categoryIcon}>
        <FontAwesome name={item.icon} size={24} color="#129575" />
      </View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <FontAwesome name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Categories</Text>
        </View>
        <View style={styles.placeholderView} />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <FontAwesome
            name="search"
            size={16}
            color="#A9A9A9"
            style={styles.searchIcon}
          />
          <Text style={styles.placeholderText}>Search categories</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>All Categories</Text>

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.categoriesGrid}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.homeIndicator}>
        <View style={styles.indicatorLine} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  backButton: {
    padding: 8,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  placeholderView: {
    width: 36, // Same width as back button for balanced layout
  },
  searchContainer: {
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  searchInputContainer: {
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 10,
  },
  placeholderText: {
    color: "#A9A9A9",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  categoriesGrid: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  categoryItem: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    maxWidth: "30%",
  },
  categoryIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
  },
  homeIndicator: {
    alignItems: "center",
    paddingVertical: 20,
  },
  indicatorLine: {
    width: 135,
    height: 5,
    backgroundColor: "#121212",
    borderRadius: 100,
  },
});
