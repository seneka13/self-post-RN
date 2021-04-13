import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { THEME } from "../theme";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PostNavigator } from "./PostNavigator";
import { BookedNavigator } from "./BookedNavigator";

const BottomTab =
  Platform.OS === "ios" ? createBottomTabNavigator() : createMaterialBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <BottomTab.Navigator
      shifting={true}
      barStyle={{ backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#FFF" }}
      tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR,
      }}
    >
      <BottomTab.Screen
        name="Post"
        component={PostNavigator}
        options={{
          tabBarLabel: "All",
          tabBarIcon: ({ color }) => <Ionicons name="ios-albums" size={25} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Booked"
        component={BookedNavigator}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => <Ionicons name="ios-star" size={25} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
