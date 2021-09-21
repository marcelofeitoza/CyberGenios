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
    height: "47%",
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
    marginLeft: '5%'
  },
  inputText: {
    backgroundColor: "#c4c4c4",
    padding: 14,
    borderRadius: 38,
    fontSize: 18,
  },

  forgot: {
    color: "#fff",
    fontSize: 18,
  },

  loginButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 38,
    marginTop: "5%",
    width: "61%",
  },
  loginButtonText: {
    color: "#fff",
    padding: 5,
    fontSize: 32,
    textAlign: "center",
    letterSpacing: 2,
  },

});

export default styles;
