import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { PostList } from "../components/PostList";
import { THEME } from "../theme";
import { loadPosts } from "../store/actions/post";

export const MainScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const allPosts = useSelector(({ post }) => post.allPosts);
  const loading = useSelector(({ post }) => post.loading);
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    );
  }

  const openPostHandler = (post) => {
    navigation.navigate("Post", { postId: post.id, data: post.date, booked: post.booked });
  };
  return <PostList data={allPosts} onOpen={openPostHandler} />;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
