import React, { useState } from "react";
import "../css/players.css";
import "../css/propListMenu.css";
import "../css/player-prop-list.css";
import { useSpring } from "react-spring";
import { PlayerPropsList } from "../Components/playerPropsList";

export const InMenuItem = ({
  handleSelectedChildFeature,
  handleSelectedFeature,
  shortName,
  childProps,
  name,
}) => {
  const [showPropsList, setShowPropsList] = useState(false);
  const anim = useSpring({
    opacity: showPropsList ? 1 : 0,
    transform: showPropsList ? "translateX(0)" : "translateX(-10px)",
    display: showPropsList ? "block" : "none",
  });

  const handleMouseEnter = () => {
    setShowPropsList(true);
  };

  const handleMouseLeave = () => {
    setShowPropsList(false);
  };

  return (
    <li
      className="in-menu-item"
      onMouseDown={() => handleSelectedFeature(shortName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name}
      {
        <PlayerPropsList
          styles={anim}
          showPropList={showPropsList}
          childs={childProps}
          onMouseDownHandler={(childFeature) =>
            handleSelectedChildFeature(childFeature)
          }
          onMouseEnterHandler={handleMouseEnter}
          onMouseLeaveHandler={handleMouseLeave}
        />
      }
    </li>
  );
};
