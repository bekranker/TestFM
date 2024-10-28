import React, { useState, useRef } from "react";
import "../css/players.css";
import "../css/propListMenu.css";
import "../css/player-prop-list.css";
import Vector2 from "../Components/Vector2";

import Draggable from "react-draggable";
import { PlayerPropsList } from "./playerPropsList";

export const SoccerPlayer = ({ onDragHandler }) => {
  const [showPropsList, setShowPropsList] = useState(false);
  const timeoutRef = useRef(null);
  const [selectedFeature, setSelectedFeature] = useState("");
  const [selectedChildFeature, setSelectedChildFeature] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [props, setProps] = useState({
    coordinate: new Vector2(0, 0),
    datas: [
      { name: "Kaleci", shortName: "K", Props: ["Savunma"] },
      {
        name: "Libero Kaleci",
        shortName: "LK",
        Props: ["Savunma", "Destek", "Hücum"],
      },
    ],
  });
  const handleSelectedChildFeature = (name) => {
    setSelectedChildFeature(`${name}`);
  };
  const handleSelectedFeature = (name) => {
    setSelectedFeature(`${name}`);
  };
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowPropsList(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPropsList(false);
    }, 300); // 300ms gecikme ile kapanma
  };

  const dragginFunc = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setProps(onDragHandler(position.x, position.y));
    console.log(props.datas[0].name);
  };

  return (
    <>
      <Draggable onDrag={dragginFunc}>
        <div className="player-container">
          <div className="soccerplayer-background">
            <span className="info">{selectedFeature}</span>
            <span className="info-child">{selectedChildFeature}</span>
          </div>
          <div className="menu">
            <ul className="in-menu">
              <li
                className="in-menu-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={() => handleSelectedFeature("K")}
              >
                {showPropsList && (
                  <PlayerPropsList
                    onMouseEnterHandler={handleMouseEnter}
                    onMouseLeaveHandler={handleMouseLeave}
                    onMouseDownHandler={handleSelectedChildFeature}
                  />
                )}
                Kaleci
              </li>
              <li
                className="in-menu-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={() => handleSelectedFeature("LK")}
              >
                {showPropsList && (
                  <PlayerPropsList
                    onMouseEnterHandler={handleMouseEnter}
                    onMouseLeaveHandler={handleMouseLeave}
                    onMouseDownHandler={handleSelectedChildFeature}
                  />
                )}
                Libero Kaleci
              </li>
            </ul>
          </div>
        </div>
      </Draggable>
    </>
  );
};
