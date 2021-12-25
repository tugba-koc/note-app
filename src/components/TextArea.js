import React, { useState } from "react";
import AddButton from "./AddButton";
import Colors from "./Colors";
import Title from "./Title";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/note/noteSlice";

function TextArea() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const allNotes = useSelector(selectItems);

  React.useEffect(() => {
    setText("");
    setTitle("");
    setColor("");
  }, [allNotes]);

  const handleColor = (e) => {
    setColor(e);
  };

  return (
    <>
      <Title title={title} setTitle={setTitle} />
      <div className="form-floating mt-1 w-50">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ maxHeight: "300px", minHeight: "300px" }}
          className="form-control border border-secondary"
        ></textarea>
        <label htmlFor="floatingTextarea2">Enter your note here..</label>
        <div className="d-flex flex-row align-items-center">
          <div>
            <Colors handleColor={handleColor} />
          </div>
          <div>
            <AddButton title={title} text={text} color={color} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TextArea;
