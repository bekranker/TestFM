import React from "react";
import "../css/propListMenu.css";
import "../css/player-prop-list.css";
export const PlayerPropsList = ({
  onMouseEnterHandler,
  onMouseLeaveHandler,
  onMouseDownHandler,
}) => {
  return (
    <>
      <div
        className="child-menu"
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <ul
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <li
            className="in-menu-item"
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={() => onMouseDownHandler("Savunma")}
          >
            savunma
          </li>
          <li
            className="in-menu-item"
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={() => onMouseDownHandler("Destek")}
          >
            destek
          </li>
          <li
            className="in-menu-item"
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={() => onMouseDownHandler("Hücum")}
          >
            hücum
          </li>
        </ul>
      </div>
    </>
  );
};
