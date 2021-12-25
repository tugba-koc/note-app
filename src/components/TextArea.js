import React, { useState } from "react";
import AddButton from "./AddButton";
import Colors from "./Colors";
import Title from "./Title";

function TextArea() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
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
          <Colors />
          <AddButton title={title} text={text} />
        </div>
      </div>
    </>
  );
}

export default TextArea;
