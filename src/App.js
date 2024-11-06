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
} from "./Components/PlayerRoles";
import DrawMultipleShapesWithCanvas from "./Components/DrawShapesWithCanvas";
import Saha_3_4_3 from "./Halisahalar/3-4-3_SAHA.png";
import Saha_4_2_2_2_DOS_OOS_POKY from "./Halisahalar/4-2-2-2(DOS-OOS-POKY)_SAHA.png";
import Saha_4_2_3_1_DOS_OOS_WIDE from "./Halisahalar/4-2-3-1(DOS-OOS-WIDE)_SAHA.png";
import Saha_4_2_4_DOS_WIDE from "./Halisahalar/4-2-4(DOS-WIDE)_SAHA.png";
import Saha_4_3_2_1_DOS_COS_POKY from "./Halisahalar/4-3-2-1(DOS-COS-POKY)_SAHA.png";
import Saha_4_3_3_DOS_WIDE from "./Halisahalar/4-3-3(DOS-WIDE)_SAHA.png";
import Saha_4_4_2 from "./Halisahalar/4-4-2_SAHA.png";
import Saha_4_4_2_DIOMAND_POKY from "./Halisahalar/4-4-2(DIAMOND-POKY)_SAHA.png";
import Saha_5_2_1_2_DOS_OOS from "./Halisahalar/5-2-1-2(DOS-OOS)_SAHA.png";
import Saha_5_2_2_1_DOS_OOS from "./Halisahalar/5-2-2-1(DOS-OOS)_SAHA.png";
import Saha_5_2_3_DOS_WIDE from "./Halisahalar/5-2-3(DOS-WIDE)_SAHA.png";
import Saha_5_2_2_DOS_KB from "./Halisahalar/5-2-2(DOS-KB)_SAHA.png";
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

const allTypes = [
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
];

function setCorrectData(xV, yV) {
  let position = new Vector2(xV, yV);
  for (let index = 0; index < allTypes.length; index++) {
    if (isWithinBounds(position, allTypes[index].coordinate)) {
      return allTypes[index];
    }
  }
}
function isWithinBounds(position, data) {
  return (
    position.x >= data.min.x &&
    position.x <= data.max.x &&
    position.y >= data.max.y &&
    position.y <= data.min.y
  );
}

const taktiks = [
  {
    taktikName: "3-4-3",
    coverImage: Saha_3_4_3,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-468, -150),
      new Vector2(-468, -35),
      new Vector2(-468, 120),
      new Vector2(-80, -330),
      new Vector2(-80, 60),
      new Vector2(-80, 118),
      new Vector2(-80, 307),
      new Vector2(488, -104),
      new Vector2(488, -12),
      new Vector2(488, 82),
    ],
  },
  {
    taktikName: "4-2-2-2 DOS OOS POKY",
    coverImage: Saha_4_2_2_2_DOS_OOS_POKY,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-292, -330),
      new Vector2(-463, -148),
      new Vector2(-468, 118),
      new Vector2(-285, -131),
      new Vector2(-285, 66),
      new Vector2(-306, 305),
      new Vector2(287, -150),
      new Vector2(287, -125),
      new Vector2(540, -50),
      new Vector2(540, -124),
    ],
  },
  {
    taktikName: "4-2-3-1 DOS OOS WIDE",
    coverImage: Saha_4_2_3_1_DOS_OOS_WIDE,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-463, -148),
      new Vector2(-468, 118),
      new Vector2(-292, -330),
      new Vector2(-306, 305),
      new Vector2(-285, -131),
      new Vector2(-284, 66),
      new Vector2(278, -311),
      new Vector2(308, -20),
      new Vector2(289, -293),
      new Vector2(540, -12),
    ],
  },
  {
    taktikName: "4-2-4 DOS WIDE",
    coverImage: Saha_4_2_4_DOS_WIDE,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-463, -148),
      new Vector2(-468, 118),
      new Vector2(-292, -330),
      new Vector2(-306, 305),
      new Vector2(-285, -131),
      new Vector2(-284, 66),
      new Vector2(278, -311),
      new Vector2(289, 293),
      new Vector2(587, -51),
      new Vector2(540, 36),
    ],
  },
  {
    taktikName: "4-3-2-1 DOS COS POKY",
    coverImage: Saha_4_3_2_1_DOS_COS_POKY,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-463, -148),
      new Vector2(-468, 118),
      new Vector2(-292, -330),
      new Vector2(-306, 305),
      new Vector2(-291, -24),
      new Vector2(-81, 59),
      new Vector2(-81, -118),
      new Vector2(287, -150),
      new Vector2(309, -124),
      new Vector2(540, -12),
    ],
  },
  {
    taktikName: "4-3-3 DOS WIDE",
    coverImage: Saha_4_3_3_DOS_WIDE,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-463, -148),
      new Vector2(-468, 118),
      new Vector2(-292, -330),
      new Vector2(-306, 305),
      new Vector2(-291, -24),
      new Vector2(-81, 59),
      new Vector2(-81, -118),
      new Vector2(278, -311),
      new Vector2(289, -293),
      new Vector2(540, -12),
    ],
  },
  {
    taktikName: "4-4-2",
    coverImage: Saha_4_4_2,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-463, -148),
      new Vector2(-468, 118),
      new Vector2(-292, -330),
      new Vector2(-306, 305),
      new Vector2(-82, -328),
      new Vector2(-81, 59),
      new Vector2(-81, -118),
      new Vector2(-71, -307),
      new Vector2(540, -51),
      new Vector2(540, 36),
    ],
  },
  {
    taktikName: "4-4-2 DIOMAND POKY",
    coverImage: Saha_4_4_2_DIOMAND_POKY,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-463, -148),
      new Vector2(-468, 118),
      new Vector2(-292, -330),
      new Vector2(-306, 305),
      new Vector2(-291, -24),
      new Vector2(-81, 59),
      new Vector2(-81, -118),
      new Vector2(308, -20),
      new Vector2(540, -51),
      new Vector2(540, 36),
    ],
  },
  {
    taktikName: "5-2-1-2 DOS OOS",
    coverImage: Saha_5_2_1_2_DOS_OOS,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-463, -148),
      new Vector2(-464, -37),
      new Vector2(-468, 118),
      new Vector2(-292, -330),
      new Vector2(-285, 131),
      new Vector2(-285, 66),
      new Vector2(-306, 305),
      new Vector2(308, -20),
      new Vector2(540, -51),
      new Vector2(540, 36),
    ],
  },
  {
    taktikName: "5-2-2-1 DOS OOS",
    coverImage: Saha_5_2_2_1_DOS_OOS,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-463, -148),
      new Vector2(-464, -37),
      new Vector2(-468, 118),
      new Vector2(-292, -330),
      new Vector2(-285, 131),
      new Vector2(-285, 66),
      new Vector2(-306, 305),
      new Vector2(308, -20),
      new Vector2(540, -51),
      new Vector2(540, 36),
    ],
  },
  {
    taktikName: "5-2-3-1 DOS WIDE",
    coverImage: Saha_5_2_3_DOS_WIDE,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-463, -148),
      new Vector2(-464, -37),
      new Vector2(-468, 118),
      new Vector2(-292, -330),
      new Vector2(-285, -131),
      new Vector2(-285, 66),
      new Vector2(-306, 305),
      new Vector2(278, -311),
      new Vector2(540, -512),
      new Vector2(289, 293),
    ],
  },
  {
    taktikName: "5-2-2 DOS KB",
    coverImage: Saha_5_2_2_DOS_KB,
    poses: [
      new Vector2(-579, -9),
      new Vector2(-463, -148),
      new Vector2(-464, -37),
      new Vector2(-468, 118),
      new Vector2(-292, -330),
      new Vector2(-291, 24),
      new Vector2(-81, 59),
      new Vector2(-81, -118),
      new Vector2(-306, 305),
      new Vector2(540, -51),
      new Vector2(540, 36),
    ],
  },
];

function App() {
  const [rotateValue, setRotateValue] = useState(0);
  const fieldRef = useRef();
  const [taktikLabelOpen, setTaktikLabelOpen] = useState(false);
  const [colors, setColors] = useState({
    backgroundColor: "#333647",
    borderColor: "#ffffff",
    color: "#7800e0",
  });
  const [hover, setHover] = useState(false);
  const [selectedTaktik, setSelectedTaktik] = useState(taktiks[0]);
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
  const fadeOutAnim = useSpring({
    opacity: hover ? 0.2 : 1,
  });
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
  const firstPositions = [
    new Vector2(-480, -412),
    new Vector2(-440, -412),
    new Vector2(-400, -412),
    new Vector2(-360, -412),
    new Vector2(-320, -412),
    new Vector2(-280, -412),
    new Vector2(-240, -412),
    new Vector2(-200, -412),
    new Vector2(-160, -412),
    new Vector2(-120, -412),
    new Vector2(-80, -412),
  ];
  return (
    <>
      {usePlatform() === "Desktop" && (
        <div className="App">
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
                        firstPositions.map((itemFP, indexFP) => {
                          itemFP = item.poses[indexFP];
                          console.log(itemFP);
                        });
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

              {firstPositions.map((item, _) => {
                return (
                  <>
                    <SoccerPlayer
                      onDragHandler={setCorrectData}
                      position={{ x: item.x, y: item.y }}
                    />
                  </>
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
