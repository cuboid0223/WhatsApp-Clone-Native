import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
//import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import BG from "../assets/images/BG.png";

const ChatRoomScreen = () => {
  // to get chatRoom id
  const route = useRoute();
  //console.warn(route.params);

  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={chatRoomData.messages} // 與他人的所有聊天記錄
        renderItem={({ item }) => <ChatMessage message={item} />} // 印出成 一個個 message
        inverted // 反轉
      />

      
    </ImageBackground>
  );
};

export default ChatRoomScreen;
