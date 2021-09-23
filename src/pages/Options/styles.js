import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebebeb",
    paddingTop: 25,
  },

  header: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
    alignItems: "center",
    marginBottom: "auto",
    marginRight: "auto",
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
    color: "#2b2b2b",

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },

  optionsContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    height: 380,
    borderRadius: 38,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },

  profPicture: {
    width: 120,
    height: 120,
    borderRadius: 60,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },

  username: {
    marginTop: 10,
    fontSize: 22,
    color: "#fafafa",

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(250,250,250,0.7)",
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },

  button: {
    flexDirection: "row",
    width: 227,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#fafafa",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    fontSize: 30,
    color: "#2b2b2b",
  },
  buttonIcon: {
    marginLeft: 10,
    width: 36,
    height: 36,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
});

export default styles;
