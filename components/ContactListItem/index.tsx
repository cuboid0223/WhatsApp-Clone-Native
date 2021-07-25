import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import { User } from "../../types";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
export type ContactListItemProps = {
  user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;

  const navigation = useNavigation();

  const onClick = () => {
    // console.warn(`clicked on ${user.name}`);
    // navigate to chatRoomScreen and send chatRoom.id and UserName to that screen
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
