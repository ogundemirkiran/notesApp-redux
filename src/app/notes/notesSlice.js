import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
  },
  reducers: {
    addNote: (state, action) => {
      const item = { id: nanoid(), ...action.payload };
      state.items.push(item);
    },

    removeNote: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((res) => res.id !== id);
      state.items = filtered;
    },

    searchNote: (state, action) => {
      var keyValue = action.payload.toUpperCase();

      const filteredKeyValue = state.items.map((res) => {
        var title = res.title.toUpperCase();

        if (title.indexOf(keyValue) > -1) {
          res.displayNone = "";
          return res;
        } else {
          res.displayNone = "d-none";

          return res;
        }
      });
      state.items = filteredKeyValue;
    },
  },
});

export const { addNote, removeNote, searchNote } = notesSlice.actions;
export default notesSlice.reducer;
