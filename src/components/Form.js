import { useState } from "react";
import { Space, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import SelectColor from "./SelectColor";
import { useDispatch } from "react-redux";
import { addNote } from "../app/notes/notesSlice";

function Form({ lastFiltered = "undefined" ? [] : lastFiltered }) {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  const form = useForm({
    initialValues: {
      title: lastFiltered.length > 0 ? lastFiltered[0].title : "",
      description: lastFiltered.length > 0 ? lastFiltered[0].description : "",
      displayNone: lastFiltered.length > 0 ? lastFiltered[0].displayNone : "",
    },
  });

  const handleSubmit = () => {
    dispatch(addNote({ cardColor: color, ...form.values }));

    form.values.description = "";
    form.values.title = "";
    setColor("");
  };

  return (
    <form onSubmit={form.onSubmit(() => handleSubmit())}>
      <TextInput
        placeholder="Title"
        size="md"
        required
        {...form.getInputProps("title")}
      ></TextInput>
      <Space h="xs" />

      <Textarea
        placeholder="Your Note"
        size="md"
        minRows={10}
        required
        {...form.getInputProps("description")}
      />

      <SelectColor form={form} color={color} setColor={setColor} />
    </form>
  );
}

export default Form;
