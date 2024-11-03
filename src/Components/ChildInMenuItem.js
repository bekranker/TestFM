import React, { useRef } from "react";
import "../css/players.css";
import "../css/player-prop-list.css";
export const ChildInMenuItem = ({
  onMouseEnterHandler,
  onMouseLeaveHandler,
  onMouseDownHandler,
  name,
}) => {
  const chars = name.split(" ").map((words) => words.charAt(0).toUpperCase());
  return (
    <li
      className="child-menu-item"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={(e) => onMouseLeaveHandler(e)}
      onClick={() => onMouseDownHandler(chars)}
    >
      {name}
    </li>
  );
};
