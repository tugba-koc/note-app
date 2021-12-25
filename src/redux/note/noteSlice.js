import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    items: [],
    color: [
      {
        id: 1,
        name: "Purple",
        color: "#aa99ff",
      },
      {
        id: 2,
        name: "Blue",
        color: "#badbed",
      },
      {
        id: 3,
        name: "Green",
        color: "#ccffaa",
      },
      {
        id: 4,
        name: "Pink",
        color: "#ffbbdd",
      },
      {
        id: 5,
        name: "Red",
        color: "#cc8099",
      },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      if (action.payload.title.length > 0 && action.payload.text.length > 0 && action.payload.color) {
        state.items.push(action.payload);
      }
    },
  },
});

export const selectColor = (state) => state.note.color;
export const selectItems = (state) => state.note.items;

export const { addNote } = noteSlice.actions;
export default noteSlice.reducer;
