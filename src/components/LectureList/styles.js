import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    marginRight: "auto",
    marginLeft: 15,
  },
  container: {
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    width: 380,
    backgroundColor: "#fff",
    paddingTop: 5,

    // align everything to the center horizontally

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  emptyList: {
    fontSize: 20,
    color: "rgba(0,0,0,0.75)",
    marginTop: 10,
    marginRight: "auto",
    marginLeft: 15,
  },
});

export default styles;
