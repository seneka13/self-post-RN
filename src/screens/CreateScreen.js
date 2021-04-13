import React, { useRef, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { PhotoPicker } from "../components/PhotoPicker";
import { addPost } from "../store/actions/post";
import { THEME } from "../theme";

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const imgRef = useRef(null);

  const savePressHandler = () => {
    dispatch(addPost({ date: new Date().toJSON(), text, img: imgRef.current, booked: false }));
    navigation.navigate("Main");
  };

  const photoPickHandler = (uri) => {
    imgRef.current = uri;
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create New Screen</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Type post text"
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            title="Create"
            color={THEME.MAIN_COLOR}
            onPress={savePressHandler}
            disabled={!text || !imgRef.current}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 20,
  },
});
