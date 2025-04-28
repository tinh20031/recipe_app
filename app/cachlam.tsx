import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function RecipeProcedure() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <FontAwesome name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookmarkButton}>
            <FontAwesome name="bookmark-o" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.recipeImageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80",
            }}
            style={styles.recipeImage}
          />
          <View style={styles.recipeOverlay}>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={12} color="#000" />
              <Text style={styles.ratingText}>4.0</Text>
            </View>
            <View style={styles.timeContainer}>
              <FontAwesome name="clock-o" size={16} color="#D9D9D9" />
              <Text style={styles.timeText}>20 phút</Text>
            </View>
            <TouchableOpacity style={styles.shareButton}>
              <FontAwesome name="share-alt" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.recipeTitleContainer}>
          <Text style={styles.recipeTitle}>
            Burger gà cay kèm khoai tây chiên
          </Text>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={styles.tabInactive}
            onPress={() => router.push("/nguyenlieu")}
          >
            <Text style={styles.tabTextInactive}>Nguyên liệu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Cách làm</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.servingContainer}>
            <FontAwesome name="cutlery" size={16} color="#A9A9A9" />
            <Text style={styles.infoText}>1 serve</Text>
          </View>
          <Text style={styles.infoText}>10 bước</Text>
        </View>

        <View style={styles.stepsContainer}>
          <View style={styles.stepCard}>
            <View style={styles.stepContent}>
              <Text style={styles.stepNumber}>Bước 1</Text>
              <Text style={styles.stepDescription}>
                Rửa sạch ức gà, cắt lát vừa ăn. Ướp với muối, tiêu, ớt bột và
                một ít tỏi băm. Để thấm gia vị trong 15 phút.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={styles.stepContent}>
              <Text style={styles.stepNumber}>Bước 2</Text>
              <Text style={styles.stepDescription}>
                Lăn ức gà qua bột chiên giòn, chiên ngập dầu đến khi vàng đều.
                Khoai tây cắt que, chiên đến khi giòn và vàng ruộm.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={styles.stepContent}>
              <Text style={styles.stepNumber}>Bước 3</Text>
              <Text style={styles.stepDescription}>
                Nướng sơ bánh mì burger. Thêm xà lách, cà chua, gà chiên và nước
                sốt cay vào giữa hai lát bánh. Dọn kèm khoai tây chiên.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={styles.stepContent}>
              <Text style={styles.stepNumber}>Bước 4</Text>
              <Text style={styles.stepDescription}>
                Bày món ăn ra đĩa, trang trí với một ít rau mùi và sốt
                mayonnaise nếu thích. Thưởng thức khi còn nóng để cảm nhận được
                hương vị thơm ngon nhất.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.homeIndicator}>
          <View style={styles.indicatorLine} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  safeArea: {
    flex: 1,
  },
  header: {
    display: "flex",
    width: "100%",
    paddingLeft: 30,
    paddingRight: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  backButton: {
    padding: 8,
  },
  bookmarkButton: {
    padding: 8,
  },
  recipeImageContainer: {
    marginTop: 10,
    width: "100%",
    paddingHorizontal: 30,
    position: "relative",
    aspectRatio: 2.1,
  },
  recipeImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  recipeOverlay: {
    position: "relative",
    borderRadius: 10,
    display: "flex",
    width: "100%",
    height: "100%",
    paddingLeft: 63,
    paddingRight: 7,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  ratingContainer: {
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FFE1B3",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 2,
    gap: 3,
    alignSelf: "flex-start",
  },
  ratingText: {
    fontSize: 10,
    color: "#000",
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    alignSelf: "flex-start",
  },
  timeText: {
    fontSize: 11,
    color: "#D9D9D9",
  },
  shareButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  recipeTitleContainer: {
    paddingHorizontal: 30,
    marginTop: 10,
  },
  recipeTitle: {
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
  },
  tabsContainer: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 13,
    gap: 15,
  },
  tabInactive: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: "center",
  },
  tabActive: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#129575",
    paddingVertical: 8,
    alignItems: "center",
  },
  tabTextInactive: {
    color: "#71B1A1",
    fontSize: 11,
    fontWeight: "600",
  },
  tabTextActive: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "600",
  },
  infoContainer: {
    flexDirection: "row",
    alignSelf: "center",
    display: "flex",
    marginTop: 22,
    width: "100%",
    maxWidth: 313,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  servingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  infoText: {
    fontSize: 11,
    color: "#A9A9A9",
  },
  stepsContainer: {
    alignSelf: "center",
    marginTop: 20,
    width: "100%",
    maxWidth: 315,
    marginBottom: 20,
  },
  stepCard: {
    borderRadius: 12,
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#F9F9F9",
  },
  stepContent: {
    borderRadius: 12,
    display: "flex",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 16,
    flexDirection: "column",
  },
  stepNumber: {
    color: "#121212",
    fontWeight: "600",
    fontSize: 11,
  },
  stepDescription: {
    color: "#A9A9A9",
    fontWeight: "400",
    fontSize: 11,
    marginTop: 5,
    lineHeight: 16,
  },
  homeIndicator: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "100%",
    paddingHorizontal: 75,
    paddingTop: 21,
    paddingBottom: 8,
  },
  indicatorLine: {
    borderRadius: 100,
    backgroundColor: "#121212",
    width: 135,
    height: 5,
  },
});
