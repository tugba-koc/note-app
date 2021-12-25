import React from "react";
import AddButton from "./AddButton";
import Colors from "./Colors";

function TextArea() {
  return (
    <div class="form-floating mt-5 w-50">
      <textarea
        style={{ maxHeight: "300px", minHeight: "300px" }}
        className="form-control border border-secondary"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
      ></textarea>
      <label for="floatingTextarea2">Enter your note here..</label>
      <Colors />
      <AddButton />
    </div>
  );
}

export default TextArea;
