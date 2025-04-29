import React, { useEffect, useState } from "react";
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
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { getRecipes, addRecipe, deleteRecipe } from "../../src/services/recipes";
import { useIsFocused } from "@react-navigation/native";

interface Recipe {
  id: string;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string[];
  is_favorite?: boolean;
  image?: string;
}

export default function QuanLyThucDon() {
  const router = useRouter();
  const isFocused = useIsFocused();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const data = await getRecipes();
      setRecipes(data);
    } catch (e) {
      alert("Lỗi tải dữ liệu!");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isFocused) {
      fetchRecipes();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <FontAwesome name="arrow-left" size={22} color="#129575" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Quản lý thực đơn</Text>
          <View style={{ width: 32 }} />
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity
            style={styles.tabButton1}
            onPress={() => router.push("/add")}
          >
            <Text style={styles.tabText}>Thêm mới</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton2}>
            <Text style={styles.tabText}>Thêm Loại</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <Text>Đang tải...</Text>
        ) : (
          recipes.map((recipe) => (
            <View style={styles.dishRow} key={recipe.id}>
              {recipe.image && (
                <Image source={{ uri: recipe.image }} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 10 }} />
              )}
              <Text style={styles.dishName}>{recipe.title}</Text>
              <TouchableOpacity style={styles.editButton} onPress={() => {/* Sửa */}}>
                <Text style={styles.editText}>Sửa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={async () => {
                  await deleteRecipe(recipe.id);
                  fetchRecipes();
                }}
              >
                <Text style={styles.deleteText}>Xoá</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
    marginTop: 8,
  },
  backButton: {
    padding: 6,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#121212",
    textAlign: "center",
    flex: 1,
  },
  tabRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 32,
  },
  tabButton1: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#129575",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabButton2: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#00C29F",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  dishRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    gap: 10,
  },
  dishName: {
    flex: 1,
    color: "#121212",
    fontSize: 16,
    fontWeight: "500",
  },
  editButton: {
    borderRadius: 8,
    backgroundColor: "#129575",
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 6,
  },
  editText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
  deleteButton: {
    borderRadius: 8,
    backgroundColor: "#FF6464",
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
  image2: {
    aspectRatio: 1.77,
    width: "100%",
    alignSelf: "center",
    marginTop: 14,
    maxWidth: 289,
  },
});
