import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
    backgroundColor: "rgba(255,255,255,0.85)",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    //borderWidth: 1,
    //borderColor: "#fff",
    width: "91%",
    height: 130,
    marginBottom: 15,
    justifyContent: "center",
  },

  logo: {
    width: "37%",
    height: "100%",
    borderRadius: 100,
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
  },
  title: {
    color: "#2B2B2B",
    fontSize: 52,

    // make a shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});

export default styles;
