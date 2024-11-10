// Importing necessary components and modules
import { taktiks } from "./Components/taktiks/taktiks";
import { SoccerPlayer } from "./Components/SoccerPlayer";
import { Ball } from "./Components/ball";
import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import Vector2 from "./Components/Vector2";
import "./css/navigationBar.css";
import html2canvas from "html2canvas";
import { NavigationButtons } from "./Components/navigationButtons";
import "./css/seperator.css";
import "./css/taktic.css";
import "./css/taktik-selection.css";
import { useSpring, animated } from "react-spring";
import { HoverMenuItems_Shapes } from "./Components/hoverMenuItems_Shapes";
import { TaktikItem } from "./Components/taktikItem";
import { ShapeSquare } from "./Components/ShapeSquare";
import { ShapeCircle } from "./Components/ShapeCricle";
import { DashedCircle } from "./Components/DashedCircle";
import { DrawLine } from "./Components/DrawLine";
import { DashedRectangle } from "./Components/DashedRectangle";
import {
  Kaleci,
  Stoperler,
  SahteDefanslar,
  BeklerUst,
  SahteBeklerUst,
  SahteKanatlarUst,
  KanatlarUst,
  BeklerAlt,
  SahteBeklerAlt,
  SahteKanatlarAlt,
  KanatlarAlt,
  OrtaSahalar,
  ForvetArkasi,
  Forvet,
  StoperlerArkaAlt,
  StoperlerArkaÜst,
} from "./Components/PlayerRoles";
import DrawMultipleShapesWithCanvas from "./Components/DrawShapesWithCanvas";
import DrawSquare from "./Components/mouseDebuggrt";
import Field from "./Components/taktiks/Field";
// Custom hook to detect the user's platform (Desktop, Android, iOS, etc.)

function usePlatform() {
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
      setPlatform("Windows Phone");
    } else if (/android/i.test(userAgent)) {
      setPlatform("Android");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setPlatform("iOS");
    } else {
      setPlatform("Desktop");
    }
  }, []);

  return platform;
}
// Array containing all player role types

const allTypes = [
  Kaleci,
  Stoperler,
  StoperlerArkaAlt,
  StoperlerArkaÜst,
  SahteDefanslar,
  BeklerUst,
  SahteBeklerUst,
  SahteKanatlarUst,
  KanatlarUst,
  BeklerAlt,
  SahteBeklerAlt,
  SahteKanatlarAlt,
  KanatlarAlt,
  OrtaSahalar,
  ForvetArkasi,
  Forvet,
];
// Function to determine the correct role data based on player position

function setCorrectData(xV, yV) {
  let position = new Vector2(xV, yV);
  for (let index = 0; index < allTypes.length; index++) {
    if (isWithinBounds(position, allTypes[index].coordinate)) {
      return allTypes[index];
    }
  }
}
// Function to determine the correct role data based on player position

function isWithinBounds(position, data) {
  return (
    position.x >= data.min.x &&
    position.x <= data.max.x &&
    position.y >= data.max.y &&
    position.y <= data.min.y
  );
}
// Array of tactic objects with tactic names, cover images, and player positions

function App() {
  //State for checking did tactic change

  //dropdown menu arrow for animation
  const [rotateValue, setRotateValue] = useState(0);
  //background
  const fieldRef = useRef();
  //taktik drop menu
  const [taktikLabelOpen, setTaktikLabelOpen] = useState(false);
  // Object for storing color values
  const [colors, setColors] = useState({
    backgroundColor: "#333647",
    borderColor: "#ffffff",
    color: "#7800e0",
  });
  //player hovering
  const [hover, setHover] = useState(false);
  //when we click a menu or child menu item this value set itself that value.
  const [selectedTaktik, setSelectedTaktik] = useState({});

  // Function to capture the soccer field as an image
  const captureField = () => {
    if (fieldRef.current) {
      html2canvas(fieldRef.current, { scale: 2 }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "soccer-field.png";
        link.click();
      });
    }
  };
  // Animation effect for fading out when hovering
  const fadeOutAnim = useSpring({
    opacity: hover ? 0.2 : 1,
  });
  // Event handler for toggling rotation and label visibility
  const onClickEvent = () => {
    setFlip(!flip);
    if (flip) {
      setRotateValue(0);
    } else {
      setRotateValue(180);
    }
    setTaktikLabelOpen(!taktikLabelOpen);
    if (!taktikLabelOpen) {
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
  };
  const anim = useSpring({
    opacity: taktikLabelOpen ? 1 : 0,
    transform: taktikLabelOpen ? "translateY(0)" : "translateY(-10px)",
    display: taktikLabelOpen ? "flex" : "none",
  });

  const [flip, setFlip] = useState(false);
  const [drawComponent, setDrawComponent] = useState(<DashedRectangle />);
  const [drawing, SetDrawing] = useState("");
  const [canDraw, SetCanDraw] = useState(false);
  return (
    // JSX component rendering the soccer field app interface

    <>
      {usePlatform() === "Desktop" && (
        <div className="App">
          <Field />
          <div className="navigation-bar bar-container">
            <NavigationButtons
              vHover={setHover}
              canDisplayHoverMenu={true}
              name="Arka Plan"
              customStyle={{ width: 163, height: 48 }}
            />
            <NavigationButtons
              vHover={setHover}
              canDisplayHoverMenu={true}
              name="Kalem"
              customStyle={{ width: 163, height: 48 }}
            />
            <NavigationButtons
              vHover={setHover}
              canDisplayHoverMenu={true}
              menuItems={
                <HoverMenuItems_Shapes
                  props={[
                    { name: "Arrow", whatItDoes: () => {} },
                    {
                      name: "Rectangle",
                      whatItDoes: () => {
                        setDrawComponent(<ShapeSquare />);
                      },
                    },
                    {
                      name: "Line",
                      whatItDoes: () => {
                        setDrawComponent(<DrawLine />);
                      },
                    },
                    {
                      name: "Circle",
                      whatItDoes: () => {
                        setDrawComponent(<ShapeCircle />);
                      },
                    },
                    {
                      name: "DashedArrow",
                      whatItDoes: () => {},
                    },
                    {
                      name: "DashedRectangle",
                      whatItDoes: () => {
                        setDrawComponent(<DashedRectangle />);
                      },
                    },
                    {
                      name: "DashedLine",
                      whatItDoes: () => {
                        setDrawComponent(<DrawLine />);
                      },
                    },
                    {
                      name: "DashedCircle",
                      whatItDoes: () => {
                        setDrawComponent(<DashedCircle />);
                      },
                    },
                  ]}
                  canDraw={canDraw}
                  setCanDraw={SetCanDraw}
                  drawing={drawing}
                  SetDrawing={SetDrawing}
                />
              }
              name="Şekiller"
              customStyle={{ width: 170, height: 48 }}
            />
            <NavigationButtons
              canDisplayHoverMenu={false}
              name="Görseli İndir"
              customStyle={{ width: 170, height: 48 }}
              onClickEvent={captureField}
            />
          </div>
          <hr className="seperator"></hr>
          <animated.div style={fadeOutAnim}>
            <div className="container-tactic">
              <div className="taktic-text">Taktik</div>
              <header
                className="tactic-selection"
                style={{ backgroundColor: colors }}
                onMouseDown={() => onClickEvent()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="arrow-down"
                  fill="#ffffff"
                  style={{
                    transform: `rotate(${rotateValue}deg)`,
                    transition: "transform 0.3s ease",
                  }}
                >
                  <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z " />
                </svg>

                <div className="tactic-text-info">
                  <a style={{ color: "#9B9EAF" }}> </a>
                  {selectedTaktik.taktikName}
                </div>
              </header>
              {
                <animated.div
                  className="container-tactik-selection"
                  style={anim}
                >
                  {taktiks.map((item, index) => (
                    <TaktikItem
                      selectTaktikEvent={() => {
                        setSelectedTaktik(item);
                      }}
                      bg={item.coverImage}
                      name={item.taktikName}
                    />
                  ))}
                </animated.div>
              }
            </div>

            <header className="App-header" id="field" ref={fieldRef}>
              <div
                style={{
                  width: 1200,
                  height: 800,
                  display: "grid",
                  borderRadius: 5,
                  backgroundImage: `url(${require("./bg2.jpeg")})`,
                }}
              >
                {canDraw && (
                  <DrawMultipleShapesWithCanvas
                    className="shape"
                    drawThis={drawComponent}
                  />
                )}
              </div>
              {Object.keys(selectedTaktik).length > 0 &&
                selectedTaktik.poses.map((item, index) => {
                  return (
                    <SoccerPlayer
                      onDragHandlerEvent={setCorrectData}
                      pos={{ x: item.x, y: item.y }}
                      recordThat={selectedTaktik}
                    />
                  );
                })}
              <Ball />
            </header>
          </animated.div>
        </div>
      )}
      {usePlatform() !== "Desktop" && (
        <div className="mobile-pop-up">
          <h1>We are working on mobile support</h1>
        </div>
      )}
    </>
  );
}

export default App;
