import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div id="divCollapse">
      <button onClick={toggle}>
        <p>{title}</p>
        <p id="chevron">
          <i className={`fa-solid fa-chevron-${open ? 'up' : 'down'}`}></i>
        </p>
      </button>
      {open && (
        <div className={`divCol ${open ? "slide-in" : "slide-out"}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;
