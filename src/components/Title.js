import React from "react";

function Title({title, setTitle}) {
  return (
    <div className="row g-3 align-items-center mt-5">
      <div className="col-auto">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          className="form-control text-center"
        />
      </div>
    </div>
  );
}

export default Title;
