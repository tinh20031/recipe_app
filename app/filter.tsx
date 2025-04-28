import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function FilterScreen() {
  const router = useRouter();
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState("morning");
  const [selectedRating, setSelectedRating] = useState(4);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleFoodType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleApplyFilter = () => {
    // Apply filter logic here
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.view1}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <FontAwesome name="arrow-left" size={20} color="#129575" />
            </TouchableOpacity>
            <Text style={styles.view2}>Lọc tìm kiếm</Text>
          </View>

          <Text style={styles.view3}>Buổi</Text>

          <View style={styles.view4}>
            <TouchableOpacity
              style={[
                styles.view5,
                selectedTimeOfDay === "all" && styles.selectedOption,
              ]}
              onPress={() => setSelectedTimeOfDay("all")}
            >
              <Text
                style={
                  selectedTimeOfDay === "all"
                    ? styles.selectedText
                    : styles.optionText
                }
              >
                All
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.view5,
                selectedTimeOfDay === "morning" && styles.view6,
              ]}
              onPress={() => setSelectedTimeOfDay("morning")}
            >
              <Text
                style={
                  selectedTimeOfDay === "morning"
                    ? styles.selectedText
                    : styles.optionText
                }
              >
                Buổi sáng
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.view5,
                selectedTimeOfDay === "noon" && styles.selectedOption,
              ]}
              onPress={() => setSelectedTimeOfDay("noon")}
            >
              <Text
                style={
                  selectedTimeOfDay === "noon"
                    ? styles.selectedText
                    : styles.optionText
                }
              >
                Buổi trưa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.view5,
                selectedTimeOfDay === "evening" && styles.selectedOption,
              ]}
              onPress={() => setSelectedTimeOfDay("evening")}
            >
              <Text
                style={
                  selectedTimeOfDay === "evening"
                    ? styles.selectedText
                    : styles.optionText
                }
              >
                Buổi tối
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.view9}>Đánh giá</Text>

          <View style={styles.view10}>
            <TouchableOpacity
              style={[
                styles.view11,
                selectedRating === 5 && styles.selectedOption,
              ]}
              onPress={() => setSelectedRating(5)}
            >
              <Text
                style={[
                  styles.view12,
                  selectedRating === 5 && styles.selectedText,
                ]}
              >
                5
              </Text>
              <FontAwesome
                name="star"
                size={18}
                color={selectedRating === 5 ? "#FFF" : "#71B1A1"}
                style={styles.starIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.view11, selectedRating === 4 && styles.view13]}
              onPress={() => setSelectedRating(4)}
            >
              <Text
                style={[
                  styles.view14,
                  selectedRating === 4 && styles.selectedText,
                ]}
              >
                4
              </Text>
              <FontAwesome
                name="star"
                size={18}
                color={selectedRating === 4 ? "#FFF" : "#71B1A1"}
                style={styles.starIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.view11,
                selectedRating === 3 && styles.selectedOption,
              ]}
              onPress={() => setSelectedRating(3)}
            >
              <Text
                style={[
                  styles.view16,
                  selectedRating === 3 && styles.selectedText,
                ]}
              >
                3
              </Text>
              <FontAwesome
                name="star"
                size={18}
                color={selectedRating === 3 ? "#FFF" : "#71B1A1"}
                style={styles.starIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.view11,
                selectedRating === 2 && styles.selectedOption,
              ]}
              onPress={() => setSelectedRating(2)}
            >
              <Text
                style={[
                  styles.view18,
                  selectedRating === 2 && styles.selectedText,
                ]}
              >
                2
              </Text>
              <FontAwesome
                name="star"
                size={18}
                color={selectedRating === 2 ? "#FFF" : "#71B1A1"}
                style={styles.starIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.view11,
                selectedRating === 1 && styles.selectedOption,
              ]}
              onPress={() => setSelectedRating(1)}
            >
              <Text
                style={[
                  styles.view20,
                  selectedRating === 1 && styles.selectedText,
                ]}
              >
                1
              </Text>
              <FontAwesome
                name="star"
                size={18}
                color={selectedRating === 1 ? "#FFF" : "#71B1A1"}
                style={styles.starIcon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.view21}>Loại</Text>

          <View style={styles.view22}>
            <View style={styles.view23}>
              <TouchableOpacity
                style={[
                  styles.view24,
                  selectedTypes.includes("all") && styles.selectedOption,
                ]}
                onPress={() => toggleFoodType("all")}
              >
                <Text
                  style={
                    selectedTypes.includes("all")
                      ? styles.selectedText
                      : styles.optionText
                  }
                >
                  Toàn bộ
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.view25,
                  selectedTypes.includes("meat") && styles.selectedOption,
                ]}
                onPress={() => toggleFoodType("meat")}
              >
                <Text
                  style={
                    selectedTypes.includes("meat")
                      ? styles.selectedText
                      : styles.optionText
                  }
                >
                  Thịt
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.view26}>
              <TouchableOpacity
                style={[
                  styles.view27,
                  selectedTypes.includes("fish") && styles.selectedOption,
                ]}
                onPress={() => toggleFoodType("fish")}
              >
                <Text
                  style={
                    selectedTypes.includes("fish")
                      ? styles.selectedText
                      : styles.optionText
                  }
                >
                  Cá
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.view28,
                  selectedTypes.includes("dessert") && styles.selectedOption,
                ]}
                onPress={() => toggleFoodType("dessert")}
              >
                <Text
                  style={
                    selectedTypes.includes("dessert")
                      ? styles.selectedText
                      : styles.optionText
                  }
                >
                  Món tráng miệng
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.view29}>
            <TouchableOpacity
              style={[
                styles.view30,
                selectedTypes.includes("fruit") && styles.selectedOption,
              ]}
              onPress={() => toggleFoodType("fruit")}
            >
              <Text
                style={
                  selectedTypes.includes("fruit")
                    ? styles.selectedText
                    : styles.optionText
                }
              >
                Trái cây
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.view31,
                selectedTypes.includes("cereal") && styles.selectedOption,
              ]}
              onPress={() => toggleFoodType("cereal")}
            >
              <Text
                style={
                  selectedTypes.includes("cereal")
                    ? styles.selectedText
                    : styles.optionText
                }
              >
                Ngũ cốc
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.view32,
                selectedTypes.includes("beans") && styles.selectedOption,
              ]}
              onPress={() => toggleFoodType("beans")}
            >
              <Text
                style={
                  selectedTypes.includes("beans")
                    ? styles.selectedText
                    : styles.optionText
                }
              >
                Đậu và hạt
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.view33,
                selectedTypes.includes("vegetables") && styles.selectedOption,
              ]}
              onPress={() => toggleFoodType("vegetables")}
            >
              <Text
                style={
                  selectedTypes.includes("vegetables")
                    ? styles.selectedText
                    : styles.optionText
                }
              >
                Rau củ
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.view34} onPress={handleApplyFilter}>
            <Text style={styles.filterButtonText}>Lọc</Text>
          </TouchableOpacity>
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: 10,
  },
  backButton: {
    position: "absolute",
    left: 0,
    padding: 5,
  },
  view1: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    display: "flex",
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 27,
    paddingBottom: 27,
    flexDirection: "column",
    fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: 11,
    color: "#000",
    fontWeight: "600",
  },
  view2: {
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "600",
    color: "#000",
  },
  view3: {
    fontSize: 14,
    marginTop: 20,
    fontWeight: "600",
    color: "#000",
  },
  view4: {
    display: "flex",
    marginTop: 10,
    width: "100%",
    maxWidth: 273,
    alignItems: "stretch",
    gap: 11,
    color: "#71B1A1",
    fontWeight: "400",
  },
  view5: {
    alignSelf: "stretch",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    marginBottom: 8,
    backgroundColor: "#F3F3F3",
  },
  view6: {
    alignSelf: "stretch",
    borderRadius: 10,
    backgroundColor: "#129575",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    color: "#FFF",
  },
  selectedOption: {
    backgroundColor: "#129575",
  },
  optionText: {
    color: "#71B1A1",
    fontWeight: "400",
  },
  selectedText: {
    color: "#FFF",
    fontWeight: "500",
  },
  view9: {
    fontSize: 14,
    marginTop: 20,
    fontWeight: "600",
    color: "#000",
  },
  view10: {
    display: "flex",
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
    gap: 15,
    color: "#71B1A1",
    fontWeight: "500",
  },
  view11: {
    alignItems: "center",
    borderRadius: 10,
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
  },
  view12: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    color: "#71B1A1",
  },
  starIcon: {
    marginLeft: 5,
  },
  view13: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#129575",
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    color: "#FFF",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  view14: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    color: "#71B1A1",
  },
  view15: {
    alignItems: "center",
    borderRadius: 10,
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  view16: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    color: "#71B1A1",
  },
  view17: {
    alignItems: "center",
    borderRadius: 10,
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  view18: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    color: "#71B1A1",
  },
  view19: {
    alignItems: "center",
    borderRadius: 10,
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  view20: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    color: "#71B1A1",
  },
  view21: {
    fontSize: 14,
    marginTop: 20,
    fontWeight: "600",
    color: "#000",
  },
  view22: {
    display: "flex",
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
    gap: 20,
    color: "#71B1A1",
    fontWeight: "400",
    justifyContent: "space-between",
  },
  view23: {
    display: "flex",
    alignItems: "stretch",
    gap: 10,
    flex: 1,
  },
  view24: {
    alignSelf: "stretch",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    marginBottom: 8,
    backgroundColor: "#F3F3F3",
  },
  view25: {
    alignSelf: "stretch",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    backgroundColor: "#F3F3F3",
  },
  view26: {
    display: "flex",
    alignItems: "stretch",
    gap: 10,
    flex: 1,
  },
  view27: {
    alignSelf: "stretch",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    marginBottom: 8,
    backgroundColor: "#F3F3F3",
  },
  view28: {
    alignSelf: "stretch",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    backgroundColor: "#F3F3F3",
  },
  view29: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: 10,
    width: "100%",
    alignItems: "stretch",
    gap: 10,
    color: "#71B1A1",
    fontWeight: "400",
  },
  view30: {
    alignSelf: "stretch",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    marginBottom: 8,
    backgroundColor: "#F3F3F3",
  },
  view31: {
    alignSelf: "stretch",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    marginBottom: 8,
    backgroundColor: "#F3F3F3",
  },
  view32: {
    alignSelf: "stretch",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    marginBottom: 8,
    backgroundColor: "#F3F3F3",
  },
  view33: {
    alignSelf: "stretch",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
    backgroundColor: "#F3F3F3",
  },
  view34: {
    alignSelf: "center",
    width: 174,
    borderRadius: 10,
    backgroundColor: "#129575",
    marginTop: 40,
    maxWidth: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    gap: 9,
    color: "#FFF",
    fontWeight: "500",
    textAlign: "center",
  },
  filterButtonText: {
    color: "#FFF",
    fontWeight: "500",
    textAlign: "center",
    textTransform: "capitalize",
  },
});
