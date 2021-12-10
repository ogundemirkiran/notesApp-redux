import React, { useState } from "react";
import { Modal, Group } from "@mantine/core";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { removeNote } from "../app/notes/notesSlice";

function ModalBtn({ id, title }) {
  const dispatch = useDispatch();

  const [opened, setOpened] = useState(false);
  const [lastFiltered, setLastFiltered] = useState("");

  const items = useSelector((state) => state.notes.items);

  const clickModalBtn = (e) => {
    if (e.target.textContent === title) {
      setOpened(true);
      const filtered = items.filter((res) => res.id === id);
      setLastFiltered(filtered);
    }
  };

  return (
    <>
      <Modal
        size="lg"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Update Your Note"
      >
        <Form lastFiltered={lastFiltered} />
      </Modal>

      <Group className="d-flex flex-row bd-highlight justify-content-between">
        <div
          className="text-white text-center fw-bold m-0 "
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            cursor: "pointer",
            width: "60%",
          }}
          onClick={(e) => clickModalBtn(e)}
        >
          {title}
        </div>
        <button
          type="button"
          className="btn  btn-sm btn-outline-light text-center  "
          onClick={() => dispatch(removeNote(id))}
        >
          X
        </button>
      </Group>
    </>
  );
}

export default ModalBtn;
