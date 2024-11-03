import React from "react";
import "../css/taktik-selection.css";
export const TaktikItem = ({ selectTaktikEvent, bg, name }) => {
  const splittedName = name.split(" ");
  const firstName = splittedName[0];
  splittedName.shift();
  const otherNames = splittedName.join(" ");
  return (
    <>
      <div
        className="tactic-item"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: false,
          backgroundSize: "cover",
          backgroundClip: "black",
          backgroundPosition: "center",
        }}
        onMouseDown={() => selectTaktikEvent()}
      >
        <div className="tactic-item-bg">
          <div className="tactic-item-name">
            <div className="tactic-text-number">{firstName}</div>
            <div
              className="tactic-text"
              style={{ display: otherNames === "" ? "none" : "block" }}
            >
              {otherNames}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
