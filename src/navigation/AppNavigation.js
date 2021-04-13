import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabNavigation } from "./TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { AboutNavigator } from "./AboutNavigator";
import { CreateNavigator } from "./CreateNavigator";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: THEME.MAIN_COLOR,
          labelStyle: { fontFamily: "open-bold" },
        }}
      >
        <Drawer.Screen
          name="PostTab"
          component={TabNavigation}
          options={{
            drawerLabel: "Main",
            drawerIcon: () => <Ionicons name="star-outline" size={20} />,
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutNavigator}
          options={{
            drawerLabel: "About App",
            drawerIcon: () => <Ionicons name="information-circle-outline" size={20} />,
          }}
        />
        <Drawer.Screen
          name="Create"
          component={CreateNavigator}
          options={{
            drawerLabel: "New Post",
            drawerIcon: () => <Ionicons name="ios-create-outline" size={20} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
