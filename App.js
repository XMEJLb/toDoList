import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Walk the dog", isCompleted: true },
    { id: 2, title: "Do my work", isCompleted: false },
    { id: 3, title: "Learn React Native", isCompleted: false },
    { id: 4, title: "Walk the dog", isCompleted: true },
    { id: 5, title: "Do my work", isCompleted: false },
    { id: 6, title: "Learn React Native", isCompleted: false },
    { id: 7, title: "Walk the dog", isCompleted: true },
    { id: 8, title: "Do my work", isCompleted: false },
    { id: 9, title: "Learn React Native", isCompleted: false },
  ]);

  const [selectedTabName, setSelectedTabName] = useState("inProgress");

  function renderTodoList() {
    return todoList.map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <CardTodo onPress={updateTodo} todo={todo} />
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };
    const updatedTodoList = [...todoList];
    const indexToUpdate = updatedTodoList.findIndex(
      (t) => t.id == updatedTodo.id
    );
    updatedTodoList[indexToUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <TabBottomMenu
          onPress={setSelectedTabName}
          selectedTabName={selectedTabName}
        />
      </View>
    </>
  );
}
