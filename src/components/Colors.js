import React from "react";
import { useSelector } from "react-redux";
import { selectColor } from "../redux/note/noteSlice";

function Colors() {
  const colors = useSelector(selectColor);

  return (
    <div className="colors list-unstyled d-flex flex-row">
      {colors.map((item) => (
        <div
          className="ms-2 rounded-circle"
          key={item.id}
          style={{ backgroundColor: item.color, width: "25px" }}
        >
          <span className="invisible">Invisible part</span>
        </div>
      ))}
    </div>
  );
}

export default Colors;
