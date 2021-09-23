import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  lecture: {
    flexDirection: "row",
    backgroundColor: "#fafafa",
    alignItems: "center",
    width: 360,
    height: 110,
    marginVertical: 5,
    marginBottom: 10,
    borderRadius: 14,

    shadowColor: "#000",

    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },

  thumbnail: {
    width: 161,
    height: 90,
    marginLeft: 10,
  },

  title: {
    fontSize: 16,
    maxWidth: 180,
    flexWrap: "wrap",
    color: "#2b2b2b",
    marginLeft: 10,
    marginTop: 5,
  },
});

export default styles;
