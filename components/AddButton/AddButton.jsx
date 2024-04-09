import { Text, Image, TouchableOpacity } from "react-native";
import { s } from "./AddButton.style";

export function AddButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.btn}>
      <Text style={s.txt}>+ New todo</Text>
    </TouchableOpacity>
  );
}
