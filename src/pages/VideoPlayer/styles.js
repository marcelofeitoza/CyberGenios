import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ebebeb",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },

  videoContainer: {
    width: "100%",

    height: 225,
    backgroundColor: "#2b2b2b",
    marginBottom: "auto",
  },

  videoDetailsContainer: {
    width: "100%",
    backgroundColor: "#ebebeb",
    paddingHorizontal: 10,
    paddingVertical: 0,
  },

  videoTitle: {
    width: "100%",
    height: "20%",
  },
  videoTitleText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#2b2b2b",
  },

  videoDescription: {
    width: "70%",
    height: "auto",
  },
  videoDescriptionText: {
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "200",
    color: "#2b2b2b",
    opacity: 0.8,
  },

  videoAdditional: {
    width: "100%",
    height: "10%",
  },
  videoAdditionalText: {
    fontSize: 14,
    fontWeight: "200",
    color: "#2b2b2b",
    opacity: 0.8,
  },
});

export default styles;
