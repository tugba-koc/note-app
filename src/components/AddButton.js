import React from "react";
import { addNote } from "../redux/note/noteSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function AddButton({ text, title }) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(addNote({title: title, text: text, id:nanoid()}))}
        type="button"
        className="btn btn-success add rounded-pill w-25"
      >
        ADD
      </button>
    </>
  );
}

export default AddButton;
