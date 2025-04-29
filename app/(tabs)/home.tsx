import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import CategoryFilterModal from "../../components/CategoryFilterModal";
import { useIsFocused } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { HomeViewModel } from "../../src/viewmodels/HomeViewModel";

const viewModel = new HomeViewModel();

export default observer(function HomeScreen() {
  const router = useRouter();
  const [showFilter, setShowFilter] = React.useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      viewModel.fetchRecipes();
    }
  }, [isFocused]);

  useEffect(() => {
    if (viewModel.error) {
      Alert.alert("Lỗi", viewModel.error);
      viewModel.clearError();
    }
  }, [viewModel.error]);

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Search & Filter */}
        <View style={styles.view2}>
          <View style={styles.view4}>
            <Text style={styles.greetingText}>Hello Tịnh</Text>
          </View>
          <View style={styles.view5}>
            <Text style={styles.subtitleText}>Hôm nay bạn nấu món gì nào?</Text>
          </View>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <TouchableOpacity onPress={() => router.push('/search')}>
                <View style={styles.view8}>
                  <FontAwesome
                    name="search"
                    size={16}
                    color="#A9A9A9"
                    style={styles.searchIcon}
                  />
                  <Text style={styles.placeholderText}>Tìm kiếm công thức</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.view9}>
              <TouchableOpacity onPress={() => setShowFilter(true)}>
                <FontAwesome
                  name="sliders"
                  size={20}
                  color="#FFFFFF"
                  style={styles.filterIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <CategoryFilterModal
          visible={showFilter}
          onClose={() => setShowFilter(false)}
          onApply={(cat: string) => {
            viewModel.setSelectedCategory(cat);
            setShowFilter(false);
          }}
          selectedCategory={viewModel.selectedCategory}
        />
        {/* Danh sách món ăn */}
        <View style={{ marginTop: 30, paddingHorizontal: 30, marginBottom: 30 }}>
          <Text style={styles.sectionTitle}>Danh sách món ăn</Text>
          {viewModel.loading ? (
            <Text>Đang tải...</Text>
          ) : (
            viewModel.filteredRecipes.map((recipe) => (
              <View key={recipe.id} style={styles.recipeCard}>
                <View style={styles.recipeImageContainer}>
                  {recipe.image && (
                    <Image source={{ uri: recipe.image }} style={{ width: 80, height: 80, borderRadius: 10, marginRight: 10 }} />
                  )}
                  <View style={{ flex: 1 }}>
                    <Text style={styles.recipeTitle}>{recipe.title}</Text>
                    <Text style={styles.recipeTime}>{recipe.category}</Text>
                  </View>
                  <TouchableOpacity onPress={() => viewModel.handleToggleFavorite(recipe.id, recipe.is_favorite)}>
                    <FontAwesome
                      name={recipe.is_favorite ? "heart" : "heart-o"}
                      size={24}
                      color={recipe.is_favorite ? "#FF6464" : "#A9A9A9"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  safeArea: {
    flex: 1,
  },
  view2: {
    display: "flex",
    width: "100%",
    paddingLeft: 30,
    paddingRight: 13,
    flexDirection: "column",
  },
  view4: {
    marginTop: 32,
  },
  greetingText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
  },
  view5: {
    marginTop: 5,
  },
  subtitleText: {
    color: "#A9A9A9",
    fontSize: 14,
  },
  view6: {
    display: "flex",
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    color: "#D9D9D9",
  },
  view7: {
    flex: 1,
  },
  view8: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#F3F3F3",
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
  view9: {
    borderRadius: 10,
    backgroundColor: "#129575",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  filterIcon: {
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 10,
  },
  recipeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    gap: 10,
  },
  recipeImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#121212",
  },
  recipeTime: {
    fontSize: 13,
    color: "#666666",
  },
});
