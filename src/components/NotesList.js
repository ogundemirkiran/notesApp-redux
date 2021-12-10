import { Col, Grid, Space } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import ModalBtn from "./ModalBtn";

function NotesList() {
  const items = useSelector((state) => state.notes.items);

  return (
    <div>
      <Space h="md" />
      <Grid grow>
        {items.map((res) => (
          <Col
            span={4}
            key={res.id}
            className={`${res.displayNone} notesListCol`}
          >
            <div className={`bg-${res.cardColor} p-2 rounded-3`}>
              <ModalBtn
                id={res.id}
                title={res.title}
                description={res.description}
                color={res.cardColor}
              />
            </div>
          </Col>
        ))}
      </Grid>
    </div>
  );
}

export default NotesList;
