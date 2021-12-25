import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/note/noteSlice";

function AddedNote() {
  const allNotes = useSelector(selectItems);
  return (
    <>
      {allNotes.map((note, id) => (
        <div key={note.id} className="card my-3 ms-3" style={{width: "33%", height:"150px"}}>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.text}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default AddedNote;
