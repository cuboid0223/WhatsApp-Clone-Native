/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatsScreen from "../screens/ChatsScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { MainTabParamList, ChatsParamList, TabTwoParamList } from "../types";
import { Fontisto } from "@expo/vector-icons";
import { View } from "../components/Themed";

// 下方式導覽列
//const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// 上方式導覽列
const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme(); // return dark mode || light mode

  return (
    // 控制 mainTab 的中樞
    <MainTab.Navigator
      initialRouteName="Chats" // app 初始所在頁面
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor: Colors[colorScheme].tint,
          width: "100%",
        },
        indicatorStyle: {
          // 滑動底線 style
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        tabStyle: {
          //width: "100%",
        },
        labelStyle: {
          fontWeight: "bold",
        },
        showIcon: true, // the default is false , so you can't see the icon
      }}
    >
      {/* 子 mainTab */}
      <MainTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" color={color} size={20} />
          ),
          tabBarLabel: () => null, // return null ，不顯示文字
        }}
      />

      {/* 子 mainTab */}
      <MainTab.Screen name="Chats" component={TabOneNavigator} />
      {/* 子 mainTab */}
      <MainTab.Screen name="Status" component={TabTwoNavigator} />
      {/* 子 mainTab */}
      <MainTab.Screen name="Calls" component={TabTwoNavigator} />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ChatsStack = createStackNavigator<ChatsParamList>();

function TabOneNavigator() {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{
          headerShown: false,
        }}
      />
    </ChatsStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
