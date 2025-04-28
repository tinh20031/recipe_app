import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const NotificationItem = ({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) => {
  return (
    <View style={styles.notificationCard}>
      <View style={styles.notificationContent}>
        <View style={styles.notificationTextContainer}>
          <Text style={styles.notificationTitle}>{title}</Text>
          <Text style={styles.notificationDescription}>{description}</Text>
        </View>
        <View style={styles.notificationIcon} />
      </View>
      <Text style={styles.notificationTime}>{time}</Text>
    </View>
  );
};

export default function ThongbaoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thông báo</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Today's Notifications */}
        <View style={styles.notificationSection}>
          <View style={styles.todaySection}>
            <NotificationItem
              title="Thông báo công thức mới!"
              description="Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum"
              time="10 mins ago"
            />
            <NotificationItem
              title="Thông báo công thức mới"
              description="Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum"
              time="30 mins ago"
            />
            <NotificationItem
              title="Thông báo lưu công thức mới!"
              description="Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum"
              time="30 mins ago"
            />
          </View>

          {/* Yesterday's Notifications */}
          <View style={styles.yesterdaySection}>
            <Text style={styles.sectionTitle}>Hôm qua</Text>
            <NotificationItem
              title="Thông báo công thức mới!"
              description="Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum"
              time="10 mins ago"
            />
            <NotificationItem
              title="Thông báo lưu công thức mới!"
              description="Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum"
              time="30 mins ago"
            />
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#121212",
  },
  placeholder: {
    width: 24,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 30,
  },
  notificationSection: {
    marginTop: 25,
  },
  todaySection: {
    width: "100%",
  },
  yesterdaySection: {
    marginTop: 10,
    width: "100%",
  },
  sectionTitle: {
    color: "#000",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  notificationCard: {
    borderRadius: 12,
    backgroundColor: "#F8F8F8",
    padding: 15,
    marginBottom: 10,
    width: "100%",
  },
  notificationContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  notificationTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  notificationTitle: {
    color: "#121212",
    fontSize: 11,
    fontWeight: "600",
  },
  notificationDescription: {
    color: "#A9A9A9",
    fontSize: 11,
    fontWeight: "400",
    marginTop: 5,
  },
  notificationIcon: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: "#FFE1B3",
  },
  notificationTime: {
    color: "#A9A9A9",
    fontSize: 7,
    fontWeight: "400",
    marginTop: 5,
  },
});
