import React from "react";
import { Container, Space } from "@mantine/core";
import Search from "./components/Search";
import Header from "./components/Header";
import Form from "./components/Form";
import NotesList from "./components/NotesList";

import "./App.css";

function App() {
  return (
    <Container className="App" size="sm" padding="sm">
      <Header />
      <Search />
      <Space h="xl" />
      <Form />

      <NotesList />
    </Container>
  );
}

export default App;
