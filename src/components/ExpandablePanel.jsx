import React from "react";
import { useState } from "react";
import { BiSolidChevronLeft, BiSolidChevronDown } from "react-icons/bi";

function ExpandablePanel({ header, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="panelDiv">
      <div className="topArrangement">
        <div className="topArrangement">{header}</div>
        <div onClick={handleClick}>
          {isOpen ? (
            <BiSolidChevronDown
              style={{
                cursor: "pointer",
              }}
            />
          ) : (
            <BiSolidChevronLeft
              style={{
                cursor: "pointer",
              }}
            />
          )}
        </div>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default ExpandablePanel;

// expanded true olduğu müddetçe yap anlamına geliyor ::: {isOpen && <div>children</div>}
