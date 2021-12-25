import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/note/noteSlice";

function AddedNote() {
  const allNotes = useSelector(selectItems);
  return (
    <div className="row w-100 mt-1">
      {allNotes.map((note, id) => (
        <div
          key={note.id}
          className="card my-3 col-md-3 offset-md-1 col-sm-6 col-12"
          style={{ height: "150px", backgroundColor: note.color }}
        >
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <hr />
            <p className="card-text">{note.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddedNote;
