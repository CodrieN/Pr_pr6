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
        <p id="chevron" className={open ? "rotate" : ""}>
          <i className={`fa-solid fa-chevron-up`}></i>{" "}
        </p>
      </button>
      {open && (
        <div className={`divCol ${open ? "slide-in" : "slide-out"}`}>
          <div className="children">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Collapse;


// import React, { useState } from "react";
// import "./Collapse.scss";

// const Collapse = ({ title, children }) => {
//   const [open, setOpen] = useState(false);

//   const toggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <div id="divCollapse">
//       <button onClick={toggle}>
//         <p>{title}</p>
//         <p id="chevron" className={open ? "rotate" : ""}>
//           <i className={`fa-solid fa-chevron-up`}></i>{" "}
//         </p>
//       </button>
//       <div
//         className={`divCol ${open ? "slide-in" : "slide-out"}`}
//         onAnimationEnd={() => {
//           if (!open) {
//             // Set display none after the slide-out animation finishes
//             setOpen(false);
//           }
//         }}
//       >
//         <div className="children">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Collapse;
