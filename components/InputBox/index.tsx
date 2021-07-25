import {
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
  Entypo,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const InputBox = () => {
  const [message, setMessage] = useState("");
  const onMicrophonePress = () => {};

  const onSendPress = () => {
    console.log(`Sending ${message}`);

    // send message to backend


    setMessage("");
  };

  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        <FontAwesome5
          name="laugh-beam"
          size={24}
          color="gray"
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="輸入訊息"
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Entypo name="attachment" size={24} color="gray" style={styles.icon} />
        {!message && (
          <Fontisto name="camera" size={24} color="gray" style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.ButtonsBox}>
          {message ? (
            <MaterialCommunityIcons name="send" size={24} color="white" />
          ) : (
            <MaterialCommunityIcons name="microphone" size={24} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
