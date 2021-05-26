import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import { ChatRoom } from "../../types";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const navigation = useNavigation();

  const user = chatRoom.users[1];

  const onClick = () => {
    console.warn(`clicked on ${user.name}`);
    // navigate to chatRoomScreen and send chatRoom.id and UserName to that screen
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: user.name,
      avatarUri: user.imageUri,
      lastSeen: "2021-05-26T19:13:08+08:00",
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text numberOfLines={1} style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>

        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt).fromNow()}
        </Text>
        {/* <Text style={styles.time}>yesterday</Text> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
