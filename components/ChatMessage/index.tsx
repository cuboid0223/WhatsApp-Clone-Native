import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Message } from "../../types";
import moment from "moment";
export type ChatMessageProps = {
  // props.message 必須符合（ Message ）規範
  message: Message;
  // ... 之後傳入的 props都需要
};

const ChatMessage = (props: ChatMessageProps) => {
  // 一條訊息 的 component
  const { message } = props;
  //console.warn(message.user.imageUri);

  const isMyMessage = () => {
    return message.user.id === "u1";
  };

  return (
    <View style={styles.container}>
      {/* <Image
        style={{ width: 45, height: 45, borderRadius: 50 }}
        source={{ uri: message.user.imageUri }}
      /> */}

      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
          },
        ]}
      >
        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}

        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;
