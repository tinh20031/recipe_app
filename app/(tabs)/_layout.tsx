import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
  Pressable,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;

        // Chọn icon phù hợp
        let iconName: React.ComponentProps<typeof FontAwesome>["name"] = "home";
        if (route.name === "bookmark") iconName = "bookmark";
        if (route.name === "quanlithucdon") iconName = "bars";
        if (route.name === "thongbao") iconName = "bell";

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabButton}
          >
            <FontAwesome
              name={iconName}
              size={26}
              color={isFocused ? "#129575" : "#C4C4C4"}
              style={route.name === "home" ? styles.homeIcon : {}}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
    elevation: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#129575",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -32,
    shadowColor: "#129575",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
  },
  homeIcon: {
    borderWidth: 1.5,
    borderColor: "#129575",
    borderRadius: 10,
    padding: 2,
  },
});

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="quanlithucdon"
        options={{
          title: "Quản lý",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="thongbao"
        options={{
          title: "Notification",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
