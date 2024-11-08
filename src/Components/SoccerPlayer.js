import React, { useState, useRef } from "react";
import "../css/players.css";
import "../css/propListMenu.css";
import "../css/player-prop-list.css";
import { InMenuItem } from "./InMenuItem";
import { useSpring, animated } from "react-spring";
import Draggable from "react-draggable";

// Main component for the soccer player
export const SoccerPlayer = ({ onDragHandlerEvent, hooks }) => {
  // Initialize state using values from the ChangePlayerData function
  const {
    propsState,
    selectedFeatureState,
    selectedChildFeatureState,
    setProps,
    setSelectedFeature,
    setSelectedChildFeature,
  } = hooks;
  // States for UI and player data
  const [showMenuState, setShowMenu] = useState(false);
  const [colorsState, setColors] = useState({
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    color: "#7800e0",
  });

  // Animation settings for the menu
  const anim = useSpring({
    opacity: showMenuState ? 1 : 0,
    transform: showMenuState ? "translateY(0)" : "translateY(-10px)",
    display: showMenuState ? "block" : "none",
  });

  // Function to handle selecting a child feature
  const handleSelectedChildFeature = (name) => {
    setSelectedChildFeature(name);
  };

  // Function to handle selecting a feature
  const handleSelectedFeature = (name) => {
    setSelectedFeature(name);
  };

  // Dragging function to update player coordinates and selected features
  const dragginFunc = (e) => {
    setProps(onDragHandlerEvent(e.clientX, e.clientY));
    if (propsState !== undefined) {
      handleSelectedChildFeature(
        propsState.datas[0].name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase())
      );
      handleSelectedFeature(propsState.datas[0].shortName);
    }
  };

  // Renders InMenuItem components based on player data
  function a() {
    if (propsState === undefined) {
      return;
    } else {
      return propsState.datas.map((item, index) => (
        <InMenuItem
          key={index}
          shortName={item.shortName}
          name={item.name}
          childProps={item.Props}
          propsState={propsState}
          handleSelectedChildFeature={handleSelectedChildFeature}
          handleSelectedFeature={handleSelectedFeature}
        />
      ));
    }
  }

  // References for player container and menu elements
  const playerRef = useRef(null);
  const menuRef = useRef(null);

  // Shows menu on mouse enter
  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  // Hides menu on mouse leave if the cursor is outside both player and menu areas
  const handleMouseLeave = (e) => {
    const playerRect = playerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();
    const isMouseInsideMenu =
      menuRect.left <= e.clientX &&
      menuRect.right >= e.clientX &&
      menuRect.top <= e.clientY &&
      menuRect.bottom >= e.clientY;
    const isMouseInsidePlayer =
      playerRect.left <= e.clientX &&
      playerRect.right >= e.clientX &&
      playerRect.top <= e.clientY &&
      playerRect.bottom >= e.clientY;

    if (!isMouseInsideMenu && !isMouseInsidePlayer) {
      setShowMenu(false);
    }
  };

  // Renders the draggable player component with hover effects and menu
  return (
    <>
      <Draggable onDrag={dragginFunc}>
        <div
          className="player-container"
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={(e) => handleMouseLeave(e)}
        >
          <div
            ref={playerRef}
            className="soccerplayer-background"
            style={colorsState}
            onMouseDown={() => {
              if (!showMenuState) {
                setColors({
                  backgroundColor: "#ffffff",
                  borderColor: "#ffffff",
                  color: "#7800e0",
                });
              } else {
                setColors({
                  backgroundColor: "#7800e0",
                  borderColor: "#7133B2",
                  color: "#ffffff",
                });
              }
            }}
            onMouseEnter={() => {
              setColors({
                backgroundColor: "#7800e0",
                borderColor: "#7133B2",
                color: "#ffffff",
              });
            }}
            onMouseLeave={(e) => {
              setColors({
                backgroundColor: "#ffffff",
                borderColor: "#ffffff",
                color: "#7800e0",
              });
            }}
          >
            <span className="info">{selectedFeatureState}</span>
            <span className="info-child">{selectedChildFeatureState}</span>
          </div>
          {
            // Animated menu that shows when showMenuState is true
            <animated.div
              className="menu"
              style={anim}
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={(e) => handleMouseLeave(e)}
            >
              <ul className="in-menu" ref={menuRef}>
                {a()}
              </ul>
            </animated.div>
          }
        </div>
      </Draggable>
    </>
  );
};
