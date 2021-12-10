import React from "react";
import { Container, Space, TextInput } from "@mantine/core";
import { useDispatch } from "react-redux";
import { searchNote } from "../app/notes/notesSlice";

function Search() {
  const dispatch = useDispatch();

  return (
    <Container size="xs" padding="xs">
      <Space h="xs" />
      <TextInput
        placeholder="Search.."
        error=""
        radius="xl"
        size="lg"
        onKeyUp={(e) => dispatch(searchNote(e.target.value))}
      />
    </Container>
  );
}

export default Search;
