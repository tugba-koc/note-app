import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    items: [],
    color: [
      {
        id: 1,
        name: "Red",
        color: "red",
      },
      {
        id: 2,
        name: "Blue",
        color: "blue",
      },
      {
        id: 3,
        name: "Green",
        color: "green",
      },
      {
        id: 4,
        name: "Yellow",
        color: "yellow",
      },
      {
        id: 5,
        name: "Purple",
        color: "purple",
      },
    ],
  },
  reducers: {},
});

export const selectColor = (state) => state.note.color;

export default noteSlice.reducer;
