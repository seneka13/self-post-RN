import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";
import { Platform } from "react-native";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { BookedScreen } from "../screens/BookedScreen";

const Booked = createStackNavigator();

export const BookedNavigator = () => {
  return (
    <Booked.Navigator
      screenOptions={{
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        headerStyle: { backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff" },
      }}
    >
      <Booked.Screen
        name="Booked"
        component={BookedScreen}
        options={({ navigation }) => ({
          title: "Favorites",
          headerStyle: { backgroundColor: THEME.MAIN_COLOR },
          headerTintColor: "#fff",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Take Photo"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Booked.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => {
          const iconName = route.params.booked ? "ios-star" : "ios-star-outline";
          const toggleHandler = route.params.toggleHandler;
          return {
            title: `Пост ${route.params.postId} от ${new Date(
              route.params.data
            ).toLocaleDateString()}`,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take Photo" iconName={iconName} onPress={toggleHandler} />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Booked.Navigator>
  );
};
