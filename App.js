import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Alert } from "react-native";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const [selectedTabName, setSelectedTabName] = useState("all");

  function getFilteredList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => todo.isCompleted === false);
      case "done":
        return todoList.filter((todo) => todo.isCompleted === true);
    }
  }
  function deleteTodo(todoToDelete) {
    Alert.alert("Delete list", "Are you sure?", [
      {
        text: "Cancel",
        style: "Cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () =>
          setTodoList(todoList.filter((t) => t.id !== todoToDelete.id)),
      },
    ]);
  }

  function renderTodoList() {
    return getFilteredList().map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <CardTodo onLongPress={deleteTodo} onPress={updateTodo} todo={todo} />
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
          todoList={todoList}
          onPress={setSelectedTabName}
          selectedTabName={selectedTabName}
        />
      </View>
    </>
  );
}
