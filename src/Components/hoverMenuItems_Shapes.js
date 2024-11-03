import React, { useState } from "react";
import "../css/hover-menu-items-shape.css";

import Arrow from "../ShapeForms/Arrow.png";
import Circle from "../ShapeForms/Circle.png";
import Line from "../ShapeForms/Line.png";
import Rectangle from "../ShapeForms/Rectangle.png";
import Dash_Arrow from "../ShapeForms/Dash_Arrow.png";
import Dash_Circle from "../ShapeForms/Dash_Circle.png";
import Dash_Line from "../ShapeForms/Dash_Line.png";
import Dash_Rectangle from "../ShapeForms/Dash_Rectangle.png";

export const HoverMenuItems_Shapes = ({
  props,
  setCanDraw,
  canDraw,
  drawing,
  SetDrawing,
}) => {
  const shapes = [
    {
      name: "Arrow",
      bgImg: Arrow,
      whatItDoes: () => {
        if (drawing === "Arrow") {
          setCanDraw(!canDraw);
        } else {
          SetDrawing("Arrow");
          setCanDraw(true);
        }
        props[0].whatItDoes();
      },
    },
    {
      name: "Rectangle",
      bgImg: Rectangle,
      whatItDoes: () => {
        if (drawing === "Rectangle") {
          setCanDraw(!canDraw);
        } else {
          SetDrawing("Rectangle");
          setCanDraw(true);
        }
        props[1].whatItDoes();
      },
    },
    {
      name: "Line",
      bgImg: Line,
      whatItDoes: () => {
        if (drawing === "Line") {
          setCanDraw(!canDraw);
        } else {
          SetDrawing("Line");
          setCanDraw(true);
        }
        props[2].whatItDoes();
      },
    },
    {
      name: "Circle",
      bgImg: Circle,
      whatItDoes: () => {
        if (drawing === "Circle") {
          setCanDraw(!canDraw);
        } else {
          SetDrawing("Circle");
          setCanDraw(true);
        }
        props[3].whatItDoes();
      },
    },
    {
      name: "DashedArrow",
      bgImg: Dash_Arrow,
      whatItDoes: () => {
        if (drawing === "DashedArrow") {
          setCanDraw(!canDraw);
        } else {
          SetDrawing("DashedArrow");
          setCanDraw(true);
        }
        props[4].whatItDoes();
      },
    },
    {
      name: "DashedRectangle",
      bgImg: Dash_Rectangle,
      whatItDoes: () => {
        if (drawing === "DashedRectangle") {
          setCanDraw(!canDraw);
        } else {
          SetDrawing("DashedRectangle");
          setCanDraw(true);
        }
        props[5].whatItDoes();
      },
    },
    {
      name: "DashedLine",
      bgImg: Dash_Line,
      whatItDoes: () => {
        if (drawing === "DashedLine") {
          setCanDraw(!canDraw);
        } else {
          SetDrawing("DashedLine");
          setCanDraw(true);
        }
        props[6].whatItDoes();
      },
    },
    {
      name: "DashedCircle",
      bgImg: Dash_Circle,
      whatItDoes: () => {
        if (drawing === "DashedCircle") {
          setCanDraw(!canDraw);
        } else {
          SetDrawing("DashedCircle");
          setCanDraw(true);
        }
        props[7].whatItDoes();
      },
    },
  ];
  return (
    <div className="container">
      {shapes.map((item, _) => (
        <button
          onMouseDown={() => {
            item.whatItDoes();
          }}
        >
          <img src={item.bgImg}></img>
        </button>
      ))}
    </div>
  );
};
