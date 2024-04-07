import { Text, Image, TouchableOpacity, View } from "react-native";
import { s } from "./TabBottomMeny.style";

export function TabBottomMenu({ selectedTabName, onPress }) {
  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: selectedTabName === tabName ? "#2f76e5" : "black",
    };
  }
  return (
    <View style={s.root}>
      <TouchableOpacity onPress={() => onPress("all")}>
        <Text style={getTextStyle("all")}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("inProgress")}>
        <Text style={getTextStyle("inProgress")}>In progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")}>
        <Text style={getTextStyle("done")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
