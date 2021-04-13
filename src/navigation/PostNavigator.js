import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";
import { Platform } from "react-native";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

const Post = createStackNavigator();

export const PostNavigator = () => {
  return (
    <>
      <Post.Navigator
        screenOptions={{
          headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
          headerStyle: { backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff" },
        }}
      >
        <Post.Screen
          name="Main"
          component={MainScreen}
          options={({ navigation }) => ({
            headerTitle: "My blog",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                  title="Take Photo"
                  iconName="ios-camera"
                  onPress={() => navigation.navigate("Create")}
                />
              </HeaderButtons>
            ),
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
        <Post.Screen
          name="Post"
          component={PostScreen}
          options={({ navigation, route }) => {
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
      </Post.Navigator>
    </>
  );
};
