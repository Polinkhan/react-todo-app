import React from "react";
import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge p="4" borderRadius="lg" colorScheme="green">
        No Todo !!
      </Badge>
    );
  }

  return (
    <VStack divider={<StackDivider />} borderColor="gray.100" borderWidth="2px" borderRadius="lg" alignItems="stretch" py="2" px="4" w="100%" maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}>
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} isRound="true" onClick={() => deleteTodo(todo.id)}></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
