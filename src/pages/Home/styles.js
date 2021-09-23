import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
    marginBottom: 'auto',
    marginRight: 'auto',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  headerTitle: {
    fontSize: 22,
    color: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;
