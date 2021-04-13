import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { THEME } from "../theme";
import { Platform } from "react-native";
import { CreateScreen } from "../screens/CreateScreen";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const Create = createStackNavigator();

export const CreateNavigator = () => {
  return (
    <Create.Navigator
      screenOptions={{
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        headerStyle: { backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff" },
      }}
    >
      <Create.Screen
        name="Create"
        component={CreateScreen}
        options={({ navigation }) => ({
          headerTitle: "Create Post",
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
    </Create.Navigator>
  );
};
