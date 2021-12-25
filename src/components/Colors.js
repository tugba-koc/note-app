import React from "react";
import { useSelector } from "react-redux";
import { selectColor } from "../redux/note/noteSlice";

function Colors({handleColor}) {
  const colors = useSelector(selectColor);
 
  return (
    <div className="colors list-unstyled d-flex flex-row">
      {colors.map((item) => (
        <a
        onClick={()=>handleColor(item.color)}
          href="##"
          className="rounded-circle ms-2"
          key={item.id}
          style={{ backgroundColor: item.color, width: "25px", height: "25px" }}
        >
          <span className="invisible">{item.color}</span>
        </a>
      ))}
    </div>
  );
}

export default Colors;
