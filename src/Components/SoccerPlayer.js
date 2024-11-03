import React, { useState, useRef } from "react";
import "../css/players.css";
import "../css/propListMenu.css";
import "../css/player-prop-list.css";
import Vector2 from "../Components/Vector2";
import { InMenuItem } from "./InMenuItem";
import { useSpring, animated } from "react-spring";
import Draggable from "react-draggable";

export const SoccerPlayer = ({ onDragHandler, position }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedChildFeature, setSelectedChildFeature] = useState("");
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
  const [selectedFeature, setSelectedFeature] = useState("");
  const [colors, setColors] = useState({
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    color: "#7800e0",
  });
  const anim = useSpring({
    opacity: showMenu ? 1 : 0,
    transform: showMenu ? "translateY(0)" : "translateY(-10px)",
    display: showMenu ? "block" : "none",
  });
  const handleSelectedChildFeature = (name) => {
    setSelectedChildFeature(name);
  };

  const handleSelectedFeature = (name) => {
    setSelectedFeature(name);
  };
  const handleMouseClick = () => {};

  const dragginFunc = (e) => {
    setProps(onDragHandler(e.clientX, e.clientY));
    if (props !== undefined) {
      handleSelectedChildFeature(
        props.datas[0].name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase())
      );
      handleSelectedFeature(props.datas[0].shortName);
    }
  };
  function a() {
    if (props === undefined) {
      return;
    } else {
      return props.datas.map((item, index) => (
        <InMenuItem
          key={index}
          shortName={item.shortName}
          name={item.name}
          childProps={item.Props}
          props={props}
          handleSelectedChildFeature={handleSelectedChildFeature}
          handleSelectedFeature={handleSelectedFeature}
        />
      ));
    }
  }
  const playerRef = useRef(null); // Referansı tanımlıyoruz
  const menuRef = useRef(null); // Menü için referans
  const handleMouseEnter = () => {
    setShowMenu(true);
  };
  const handleMouseLeave = (e) => {
    // Menü dışına çıkıldığında yalnızca kapanacak
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
  return (
    <>
      <Draggable onDrag={dragginFunc} defaultPosition={position}>
        <div
          className="player-container"
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={(e) => handleMouseLeave(e)}
        >
          <div
            ref={playerRef}
            className="soccerplayer-background"
            style={colors}
            onMouseDown={() => {
              handleMouseClick();
              if (!showMenu) {
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
            <span className="info">{selectedFeature}</span>
            <span className="info-child">{selectedChildFeature}</span>
          </div>
          {
            // Burada showMenu kontrolü ekle
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
