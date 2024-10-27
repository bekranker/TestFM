import React from "react";

export const PlayerFirstMenu = (props) => {
  return (
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
  );
};
