import React from "react";
import { View, Text } from "react-native";
//import styles from "./styles";
import { useRoute } from "@react-navigation/native";
const ChatRoomScreen = () => {
  // to get chatRoom id
  const route = useRoute();
  //console.warn(route.params);

  return (
    <View>
      <Text> Chat Room</Text>
    </View>
  );
};

export default ChatRoomScreen;
