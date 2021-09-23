import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    width: "100%",
    marginTop: 'auto',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  
  icon: {
    
    width: 30,
    height: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  headerText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#2b2b2b",
    //number of lines is 1
    flexShrink: 1,
    
  },

});

export default styles;
