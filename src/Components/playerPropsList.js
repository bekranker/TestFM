import React from "react";
import "../css/propListMenu.css";
import "../css/player-prop-list.css";
import { animated } from "react-spring";
import { ChildInMenuItem } from "./ChildInMenuItem";

export const PlayerPropsList = ({
  onMouseEnterHandler,
  onMouseLeaveHandler,
  onMouseDownHandler,
  childs,
  showPropList,
  styles,
}) => {
  return (
    <animated.div
      style={{
        ...styles,
        position: "absolute",
        top: 0,
        left: "100%",
        zIndex: 10,
      }}
      className="child-menu-parent"
      onMouseEnter={onMouseEnterHandler}
    >
      <ul className="child-menu">
        {childs.map((item, index) => (
          <ChildInMenuItem
            key={index}
            onMouseDownHandler={onMouseDownHandler}
            onMouseEnterHandler={onMouseEnterHandler}
            onMouseLeaveHandler={onMouseLeaveHandler}
            name={item}
          />
        ))}
      </ul>
    </animated.div>
  );
};
