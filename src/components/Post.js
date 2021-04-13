import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <ImageBackground style={styles.img} source={{ uri: post.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: "hidden",
  },

  img: {
    width: "100%",
    height: 200,
  },

  textWrap: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
  },

  title: {
    color: "#fff",
    fontFamily: "open-regular",
  },
});
