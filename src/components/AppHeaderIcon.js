import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { THEME } from "../theme";

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={24}
    color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
    IconComponent={Ionicons}
  />
);
