import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <Text>Body</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
