/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, Image, Text } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import Colors from "../constants/Colors";
import { View } from "../components/Themed";
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import moment from "moment";
import { StatusBar } from "expo-status-bar";
import ContactsScreen from "../screens/ContactsScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint, // header background color
          shadowOpacity: 0, // 將白色底線消除 ios
          elevation: 0, // 將白色底線消除 android
        },
        headerTintColor: Colors.light.background, // header font color
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* 放大鏡 與 三個點點 */}
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: Colors.light.tint,
                width: 60,
                justifyContent: "space-between",
                marginRight: 10,
              }}
            >
              <Octicons name="search" size={22} color={"white"} />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={"white"}
              />
            </View>
          ),
        }}
      />
      {/* 點進聊天室(ChatRoom)後，顯示使用者頭像與名稱... */}
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ navigation, route }) => ({
          // 顯示聊天對像名稱
          title: null,
          headerStyle: {
            backgroundColor: Colors.light.tint,
            height: 100,
          },
          headerLeft: () => (
            <View
              style={{
                height: "100%",
                backgroundColor: Colors.light.tint,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                // paddingVertical: 10,
              }}
            >
              <Ionicons
                style={{ width: 50 }}
                name="chevron-back-sharp"
                size={30}
                onPress={() => {
                  navigation.goBack(null);
                }}
                color="white"
              />
              <Image
                style={{ width: 40, height: 40, borderRadius: 50 }}
                source={{ uri: route.params.avatarUri }}
              />
              <View
                style={{
                  backgroundColor: Colors.light.tint,
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, color: "white" }}
                >
                  {route.params.name}
                </Text>
                <Text
                  style={{ color: "whitesmoke", fontSize: 12, opacity: 0.5 }}
                >
                  {moment(route.params.lastSeen).fromNow()}
                </Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: Colors.light.tint,
                width: 120,
                justifyContent: "space-between",
                marginRight: 10,
              }}
            >
              <MaterialIcons name="call" size={22} color={"white"} />
              <FontAwesome5 name="video" size={22} color={"white"} />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={"white"}
              />
            </View>
          ),
        })}
      />
      {/* Contacts 頁面 */}
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      {/* Not Found 頁面 */}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
