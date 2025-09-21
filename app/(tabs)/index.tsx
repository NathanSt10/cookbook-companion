import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.view}>
      <Text style={style.createHeader}>Main Page</Text>
    </View> 
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    width: 100,
    height: 20,
    backgroundColor: "coral",
    borderRadius: 8, 
    textAlign: "center",
  },
  createHeader: {
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 18,
          paddingVertical: 250,
      },
})