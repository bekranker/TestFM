import React from "react";
import ballImage from "../ball.png";
import Draggable from "react-draggable";
import "../css/ball.css";

export const Ball = () => {
  return (
    <Draggable>
      <div
        style={{
          width: 25,
          height: 25,
          backgroundImage: `url(${ballImage})`,
          backgroundSize: "cover",
          zIndex: 3,
          cursor: "move",
        }}
      />
    </Draggable>
  );
};
