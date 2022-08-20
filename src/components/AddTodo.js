import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState("");

  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      body: content,
    };

    if (!content) {
      return toast({
        title: "Blank!!",
        description: "You are sending a blank msg.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }

    addTodo(todo);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8" w="100%" maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}>
        <Input variant="filled" placeholder="Enter Todo" value={content} onChange={(e) => setContent(e.target.value)} />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
