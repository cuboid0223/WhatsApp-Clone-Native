import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginBottom: 30,
  },
  mainBox: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "white",
    padding: 10,
    marginRight: 10,
    borderRadius: 25,
    flex: 1,
  },
  textInput: {
    // backgroundColor: "red",
    flex: 1,
    marginHorizontal: 10,
    paddingBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  ButtonsBox: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
