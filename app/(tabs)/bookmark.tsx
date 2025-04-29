import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function BookmarkScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Thực đơn đã lưu</Text>
          <View style={styles.cardsContainer}>
            {/* Card 1 */}
            <View style={styles.card}>
                <Image
              source={{ uri: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" }}
                  style={styles.cardImage}
                />
            <View style={styles.overlayTop}>
                  <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={12} color="#FFD700" />
                    <Text style={styles.ratingText}>4.0</Text>
                    </View>
                    <TouchableOpacity>
                <FontAwesome name="bookmark" size={22} color="#FFD700" />
                    </TouchableOpacity>
                  </View>
            <View style={styles.cardContent}>
              <Text style={styles.foodTitle}>Sườn nướng truyền thống</Text>
              <View style={styles.timeRow}>
                <FontAwesome name="clock-o" size={14} color="#D9D9D9" />
                <Text style={styles.timeText}>20 phút</Text>
              </View>
            </View>
          </View>
            {/* Card 2 */}
            <View style={styles.card}>
                <Image
              source={{ uri: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop" }}
                  style={styles.cardImage}
                />
            <View style={styles.overlayTop}>
                  <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={12} color="#FFD700" />
                    <Text style={styles.ratingText}>4.0</Text>
                      </View>
                      <TouchableOpacity>
                <FontAwesome name="bookmark" size={22} color="#FFD700" />
                      </TouchableOpacity>
                    </View>
            <View style={styles.cardContent}>
              <Text style={styles.foodTitle}>gà nướng gia vị với cơm hương vị</Text>
            </View>
          </View>
            {/* Card 3 */}
            <View style={styles.card}>
                <Image
              source={{ uri: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2025&auto=format&fit=crop" }}
                  style={styles.cardImage}
                />
            <View style={styles.overlayTop}>
                  <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={12} color="#FFD700" />
                    <Text style={styles.ratingText}>4.0</Text>
                      </View>
                      <TouchableOpacity>
                <FontAwesome name="bookmark" size={22} color="#FFD700" />
                      </TouchableOpacity>
                    </View>
            <View style={styles.cardContent}>
              <Text style={styles.foodTitle}>Cơm chiên cay trộn gà bali</Text>
              <View style={styles.timeRow}>
                <FontAwesome name="clock-o" size={14} color="#D9D9D9" />
                <Text style={styles.timeText}>20 phút</Text>
              </View>
            </View>
          </View>
            {/* Card 4 */}
            <View style={styles.card}>
                <Image
              source={{ uri: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" }}
                  style={styles.cardImage}
                />
            <View style={styles.overlayTop}>
                  <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={12} color="#FFD700" />
                    <Text style={styles.ratingText}>3.0</Text>
              </View>
              <TouchableOpacity>
                <FontAwesome name="bookmark" size={22} color="#FFD700" />
              </TouchableOpacity>
              </View>
            <View style={styles.cardContent}>
              <Text style={styles.foodTitle}>Lamb chops with fruity couscous and mint</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "#121212",
  },
  cardsContainer: {
    gap: 20,
  },
  card: {
    borderRadius: 16,
    backgroundColor: "#fff",
    marginBottom: 0,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  overlayTop: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF8E1",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "500",
  },
  cardContent: {
    padding: 14,
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#121212",
    marginBottom: 6,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  timeText: {
    fontSize: 12,
    color: "#A9A9A9",
    fontWeight: "400",
  },
});
