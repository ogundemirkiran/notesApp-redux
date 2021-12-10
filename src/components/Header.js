import React from "react";
import { Space, Title } from "@mantine/core";

function Header() {
  return (
    <>
      <Space h="xl" />
      <Title order={1} align="center">
        NotesApp
      </Title>
    </>
  );
}

export default Header;
