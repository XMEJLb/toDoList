import { Text, Image, TouchableOpacity, View } from "react-native";
import { s } from "./TabBottomMeny.style";

export function TabBottomMenu({ selectedTabName, onPress, todoList }) {
  const countByStatus = todoList.reduce(
    (acc, todo) => {
      todo.isCompleted ? acc.done++ : acc.inProgress++;
      return acc;
    },
    {
      all: todoList.length,
      inProgress: 0,
      done: 0,
    }
  );

  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: selectedTabName === tabName ? "#2f76e5" : "black",
    };
  }
  return (
    <View style={s.root}>
      <TouchableOpacity onPress={() => onPress("all")}>
        <Text style={getTextStyle("all")}>All ({countByStatus.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("inProgress")}>
        <Text style={getTextStyle("inProgress")}>
          In progress ({countByStatus.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")}>
        <Text style={getTextStyle("done")}>Done ({countByStatus.done})</Text>
      </TouchableOpacity>
    </View>
  );
}
