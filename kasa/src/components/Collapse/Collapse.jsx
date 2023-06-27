import React, { useState } from "react";
import "./Collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggle}>
        <p>{title}</p>
        <p id="chevron">
          <FontAwesomeIcon
            icon={faChevronUp}
            className={open ? "rotate" : ""}
          />
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
