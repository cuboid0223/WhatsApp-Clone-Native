import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import ChatListItem from "../components/ChatListItem";

import ChatRooms from "../data/ChatRooms";

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={ChatRooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
      />
      {/* <ChatListItem chatRoom={ChatRooms[0]} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
