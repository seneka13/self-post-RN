import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { THEME } from "../theme";
import { Platform } from "react-native";
import { AboutScreen } from "../screens/AboutScreen";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const About = createStackNavigator();

export const AboutNavigator = () => {
  return (
    <About.Navigator
      screenOptions={{
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        headerStyle: { backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff" },
      }}
    >
      <About.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          headerTitle: "About App",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Take Photo"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
          headerTintColor: "#fff",
        })}
      />
    </About.Navigator>
  );
};
