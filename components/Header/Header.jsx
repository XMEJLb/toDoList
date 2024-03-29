import { Text, Image } from "react-native";
import { s } from "./Header.style";
import logo from "../../assets/logo.png";
export function Header() {
  return (
    <>
      <Image style={s.img} source={logo} resizeMode="contain" />
      <Text style={s.subtitle}>You have something to do</Text>
    </>
  );
}
