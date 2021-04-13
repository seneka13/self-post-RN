import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from "react-native";
import { THEME } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { removePost, toggleBooked } from "../store/actions/post";
import { useLayoutEffect } from "react";

export const PostScreen = ({ navigation, route }) => {
  const postId = route.params.postId;

  const post = useSelector(({ post }) => post.allPosts.find((post) => post.id === postId));
  const dispatch = useDispatch();

  const booked = useSelector((state) => state.post.bookedPosts.some((post) => post.id === postId));

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post));
  }, [dispatch, post]);

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, [toggleHandler]);

  const removeHandler = () => {
    Alert.alert(
      "Delete Post",
      "Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress() {
            dispatch(removePost(postId));
            navigation.navigate("Main");
          },
        },
      ],
      { cancelable: true }
    );
  };

  if (!post) {
    return null;
  }
  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.img} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button title="Delete" color={THEME.DANGER_COLOR} onPress={removeHandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: "open-regular",
  },
});
