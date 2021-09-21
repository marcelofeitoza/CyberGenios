import { StyleSheet } from "react-native";

const DEFAULT_FONT = require("../../../assets/fonts/Poppins-Regular.ttf");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#323232"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    //borderWidth: 1,
    //borderColor: "#fff",
    height: "18%",
    width: '91%',
    marginBottom: 10,
    justifyContent: "center",
  },

  logo: {
    width: "37%",
    height: "100%",
    borderRadius: 100,
    marginRight: 15,
  },
  title: {
    color: "#fff",
    fontSize: 56,
  },
});

export default styles;
