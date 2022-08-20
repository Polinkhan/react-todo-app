import "./App.css";
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    console.log(id);
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack>
      <IconButton icon={colorMode === "light" ? <FaSun /> : <FaMoon />} m="5" isRound="true" size="lg" alignSelf="flex-end" onClick={toggleColorMode}></IconButton>
      <Heading pb="5" fontWeight="extrabold" size="2xl" bgGradient="linear(to-r,pink.300,pink.500,blue.300)" bgClip="text">
        Todo Appicaiton
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
