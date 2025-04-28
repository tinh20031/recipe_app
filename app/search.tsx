import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

export default function SearchScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.view1}>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Text style={styles.statusTimeText}>19:27</Text>
            <View style={styles.statusIconsContainer}>
              <FontAwesome
                name="wifi"
                size={16}
                color="#303030"
                style={styles.statusIcon}
              />
              <FontAwesome
                name="signal"
                size={16}
                color="#303030"
                style={styles.statusIcon}
              />
              <FontAwesome name="battery-full" size={16} color="#303030" />
            </View>
          </View>

          <View style={styles.view4}>
            <Text style={styles.titleText}>Tìm kiếm công thức</Text>
          </View>

          <View style={styles.view5}>
            <View style={styles.view6}>
              <View style={styles.searchInputContainer}>
                <FontAwesome
                  name="search"
                  size={16}
                  color="#A9A9A9"
                  style={styles.searchIcon}
                />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Tìm kiếm công thức"
                  placeholderTextColor="#A9A9A9"
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.view8}
              onPress={() => router.push("/filter")}
            >
              <FontAwesome
                name="sliders"
                size={20}
                color="#FFFFFF"
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Recent searches section */}
          <View style={styles.recentSearchesContainer}>
            <Text style={styles.sectionTitle}>Tìm kiếm gần đây</Text>
            <View style={styles.recentSearchItem}>
              <FontAwesome
                name="clock-o"
                size={16}
                color="#A9A9A9"
                style={styles.recentSearchIcon}
              />
              <Text style={styles.recentSearchText}>Cơm chiên</Text>
              <TouchableOpacity style={styles.removeButton}>
                <FontAwesome name="times" size={16} color="#A9A9A9" />
              </TouchableOpacity>
            </View>
            <View style={styles.recentSearchItem}>
              <FontAwesome
                name="clock-o"
                size={16}
                color="#A9A9A9"
                style={styles.recentSearchIcon}
              />
              <Text style={styles.recentSearchText}>Gà kho</Text>
              <TouchableOpacity style={styles.removeButton}>
                <FontAwesome name="times" size={16} color="#A9A9A9" />
              </TouchableOpacity>
            </View>
            <View style={styles.recentSearchItem}>
              <FontAwesome
                name="clock-o"
                size={16}
                color="#A9A9A9"
                style={styles.recentSearchIcon}
              />
              <Text style={styles.recentSearchText}>Canh chua</Text>
              <TouchableOpacity style={styles.removeButton}>
                <FontAwesome name="times" size={16} color="#A9A9A9" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Popular searches section */}
          <View style={styles.popularSearchesContainer}>
            <Text style={styles.sectionTitle}>Phổ biến</Text>
            <View style={styles.tagsContainer}>
              <TouchableOpacity style={styles.tagItem}>
                <Text style={styles.tagText}>Món Việt</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tagItem}>
                <Text style={styles.tagText}>Món chay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tagItem}>
                <Text style={styles.tagText}>Bánh ngọt</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tagItem}>
                <Text style={styles.tagText}>Món ăn sáng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tagItem}>
                <Text style={styles.tagText}>Món tráng miệng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tagItem}>
                <Text style={styles.tagText}>Đồ uống</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.view9}>
          <View style={styles.view10} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  view1: {
    borderRadius: 30,
    flex: 1,
    width: "100%",
    paddingTop: 14,
    overflow: "hidden",
    fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
  },
  view2: {
    display: "flex",
    width: "100%",
    paddingLeft: 30,
    paddingRight: 13,
    flexDirection: "column",
    alignItems: "stretch",
  },
  view3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "SF Pro Display, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: 15,
    color: "#303030",
    fontWeight: "500",
    letterSpacing: -0.17,
  },
  statusTimeText: {
    fontSize: 15,
    color: "#303030",
    fontWeight: "500",
  },
  statusIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusIcon: {
    marginRight: 8,
  },
  view4: {
    marginTop: 22,
    alignItems: "center",
  },
  titleText: {
    color: "#181818",
    fontSize: 18,
    fontWeight: "600",
  },
  view5: {
    display: "flex",
    marginTop: 17,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    fontSize: 11,
    color: "#D9D9D9",
    fontWeight: "400",
  },
  view6: {
    flex: 1,
  },
  searchInputContainer: {
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
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#303030",
  },
  view8: {
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
  recentSearchesContainer: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181818",
    marginBottom: 15,
  },
  recentSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F3F3",
  },
  recentSearchIcon: {
    marginRight: 15,
  },
  recentSearchText: {
    flex: 1,
    fontSize: 14,
    color: "#303030",
  },
  removeButton: {
    padding: 5,
  },
  popularSearchesContainer: {
    marginTop: 30,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  tagItem: {
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 14,
    color: "#303030",
  },
  view9: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: "auto",
    width: "100%",
    paddingLeft: 75,
    paddingRight: 75,
    paddingTop: 21,
    paddingBottom: 8,
    flexDirection: "column",
    overflow: "hidden",
  },
  view10: {
    borderRadius: 100,
    backgroundColor: "#121212",
    width: 135,
    height: 5,
  },
});
