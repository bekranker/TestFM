import React, { useState, useRef } from "react";
import "../css/navigationBar.css";
import { useSpring, animated } from "react-spring";

export const NavigationButtons = ({
  name,
  onClickEvent,
  customStyle,
  vHover,
  canDisplayHoverMenu,
  menuItems,
}) => {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  const anim = useSpring({
    opacity: hover ? 1 : 0,
    onRest: () => {
      if (!hover) setShow(false); // hover false ise gösterimi kapat
    },
    onStart: () => {
      if (hover) setShow(true);
    },
    config: { duration: 90 },
  });
  const hoverHandler = () => {
    setHover(true);
    if (!vHover) return;
    vHover(true);
  };
  const exitHover = () => {
    setHover(false);
    if (!vHover) return;
    vHover(false);
  };
  const customMenu = canDisplayHoverMenu && show && (
    <animated.div
      className="hover-menu"
      style={{ ...anim }}
      ref={menuRef}
      onMouseEnter={() => hoverHandler}
      onMouseLeave={exitHover}
    >
      <div className="hover-menu-item-parent" ref={menuRef}>
        <div
          className="hover-menu-item"
          ref={menuRef}
          style={{ ...{ margin: 0 } }}
        >
          {menuItems}
        </div>
      </div>
    </animated.div>
  );
  const [bgColor, setBgColor] = useState("#333647");

  const leaveFunction = (e) => {
    setBgColor("#333647");
    handleMouseLeave(e);
    exitHover();
  };
  const enterFunction = () => {
    hoverHandler();
    setBgColor("#7800e0");
  };
  const clickFunction = () => {
    if (onClickEvent === undefined) return;
    onClickEvent();
  };

  const handleMouseLeave = (e) => {
    if (menuRef.current === null) {
      return;
    }
    const menuRect = menuRef.current.getBoundingClientRect();

    if (menuRect !== null) {
      const isMouseInsideMenu =
        menuRect.left <= e.clientX &&
        menuRect.right >= e.clientX &&
        menuRect.top <= e.clientY &&
        menuRect.bottom >= e.clientY;

      if (!isMouseInsideMenu) {
        exitHover();
      }
    }
  };

  return (
    <>
      <div>
        <button
          className="item nav-button"
          onMouseDown={clickFunction}
          onMouseLeave={(e) => leaveFunction(e)}
          onMouseEnter={enterFunction}
          style={{ ...customStyle, backgroundColor: bgColor }}
        >
          {name}
          {customMenu}
        </button>
      </div>
    </>
  );
};
