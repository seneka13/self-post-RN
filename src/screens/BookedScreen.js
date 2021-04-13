import React from "react";
import { useSelector } from "react-redux";
import { PostList } from "../components/PostList";
import { DATA } from "../data";

export const BookedScreen = ({ navigation }) => {
  const bookedPosts = useSelector(({ post }) => post.bookedPosts);
  const openPostHandler = (post) => {
    navigation.navigate("Post", { postId: post.id, data: post.date, booked: post.booked });
  };
  return <PostList data={bookedPosts} onOpen={openPostHandler} />;
};
