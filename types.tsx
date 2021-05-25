/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

// 預防 typo 錯誤
export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type ChatsParamList = {
  ChatsScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
};

export type Message = {
  id: String;
  content: string;
  createdAt: string;
};

export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
};
