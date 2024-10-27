import React, { useState, useRef } from "react";
import "../css/players.css";
import "../css/propListMenu.css";
import "../css/player-prop-list.css";
import Draggable from "react-draggable";
import { PlayerPropsList } from "./playerPropsList";

export const SoccerPlayer = ({ onDragHandler }) => {
  const [showPropsList, setShowPropsList] = useState(false);
  const timeoutRef = useRef(null);
  const [selectedFeature, setSelectedFeature] = useState("");
  const [selectedChildFeature, setSelectedChildFeature] = useState("");
  let props = "";
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

  const dragginFunc = (e, data) => {
    props = onDragHandler(data.x, data.y);
  };
  const endDragFunc = (e, data) => {
    console.log(props);
  };
  return (
    <>
      <Draggable onDrag={dragginFunc} onStop={endDragFunc}>
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
