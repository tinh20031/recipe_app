import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NguyenLieuScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.recipeContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80",
              }}
              style={styles.recipeImage}
            />
            <View style={styles.overlayContainer}>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={12} color="#000" />
                <Text style={styles.ratingText}>4.0</Text>
              </View>
              <View style={styles.timeInfoContainer}>
                <View style={styles.timeContainer}>
                  <Ionicons name="time-outline" size={17} color="#D9D9D9" />
                  <Text style={styles.timeText}>20 phút</Text>
                </View>
                <TouchableOpacity style={styles.bookmarkButton}>
                  <Ionicons name="bookmark-outline" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.recipeTitle}>
              Burger gà cay kèm khoai tây chiên
            </Text>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <View style={styles.activeTab}>
            <Text style={styles.activeTabText}>Nguyên liệu</Text>
          </View>
          <TouchableOpacity style={styles.inactiveTab}>
            <Text style={styles.inactiveTabText}>Cách làm</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.servingInfoContainer}>
          <View style={styles.servingContainer}>
            <Ionicons name="person-outline" size={17} color="#A9A9A9" />
            <Text style={styles.servingText}>1 serve</Text>
          </View>
          <Text style={styles.itemCountText}>10 Items</Text>
        </View>

        <View style={styles.ingredientsContainer}>
          <IngredientItem
            name="Cà chua"
            amount="500g"
            image="https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <IngredientItem
            name="Bắp cải"
            amount="300g"
            image="https://images.unsplash.com/photo-1603049404411-13c2ca81a9c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
          />
          <IngredientItem
            name="Taco"
            amount="300g"
            image="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <IngredientItem
            name="Bánh mì"
            amount="300g"
            image="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          />
        </View>

        <View style={styles.homeIndicator}>
          <View style={styles.indicatorLine} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function IngredientItem({ name, amount, image }) {
  return (
    <View style={styles.ingredientItem}>
      <View style={styles.ingredientContent}>
        <View style={styles.ingredientInfo}>
          <Image source={{ uri: image }} style={styles.ingredientImage} />
          <Text style={styles.ingredientName}>{name}</Text>
        </View>
        <Text style={styles.ingredientAmount}>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    padding: 5,
  },
  recipeContainer: {
    paddingHorizontal: 30,
    marginTop: 10,
  },
  imageContainer: {
    borderRadius: 10,
    aspectRatio: 2.1,
    position: "relative",
  },
  recipeImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  overlayContainer: {
    position: "relative",
    borderRadius: 10,
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFE1B3",
    borderRadius: 20,
    paddingHorizontal: 7,
    paddingVertical: 2,
    alignSelf: "flex-start",
    gap: 3,
  },
  ratingText: {
    fontSize: 8,
    color: "#000",
  },
  timeInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  timeText: {
    fontSize: 11,
    color: "#D9D9D9",
    fontFamily: "Poppins",
  },
  bookmarkButton: {
    padding: 5,
  },
  titleContainer: {
    marginTop: 10,
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    fontFamily: "Poppins",
  },
  tabsContainer: {
    flexDirection: "row",
    marginTop: 63,
    paddingHorizontal: 30,
    paddingVertical: 13,
    gap: 15,
  },
  activeTab: {
    flex: 1,
    backgroundColor: "#129575",
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: "center",
  },
  activeTabText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
  },
  inactiveTab: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: "center",
  },
  inactiveTabText: {
    color: "#71B1A1",
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
  },
  servingInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    paddingHorizontal: 30,
  },
  servingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  servingText: {
    fontSize: 11,
    color: "#A9A9A9",
    fontFamily: "Poppins",
  },
  itemCountText: {
    fontSize: 11,
    color: "#A9A9A9",
    fontFamily: "Poppins",
  },
  ingredientsContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  ingredientItem: {
    marginBottom: 10,
  },
  ingredientContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 12,
    padding: 15,
  },
  ingredientInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  ingredientImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  ingredientName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#121212",
    fontFamily: "Poppins",
  },
  ingredientAmount: {
    fontSize: 14,
    color: "#A9A9A9",
    fontFamily: "Poppins",
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
