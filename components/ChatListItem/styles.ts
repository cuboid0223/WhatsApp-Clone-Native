import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 50,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 14,
    color: "gray",
  },
  time: {
    fontSize: 14,
    color: "gray",
  },
  leftContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "space-around",
  },
});

export default styles;
