import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginForm: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b2b2b",
    borderRadius: 38,
    //borderWidth: 1,
    //borderColor: "#fff",
    width: "91%",
    height: 380,
    paddingVertical: 10,
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

  inputUsername: {
    width: "90%",
    marginBottom: "5%",
  },
  inputPassword: {
    width: "90%",
    marginBottom: "5%",
  },

  inputPlaceholder: {
    color: "#fff",
    fontSize: 18,
    marginLeft: "5%",
  },
  inputText: {
    backgroundColor: "#fafafa",
    padding: 14,
    borderRadius: 38,
    fontSize: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },

  forgot: {
    color: "#fff",
    fontSize: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },

  loginButton: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 38,
    marginTop: "5%",
    width: "61%",

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    color: "#2b2b2b",
    padding: 5,
    fontSize: 32,
    textAlign: "center",
    letterSpacing: 2,

    //shadow
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
