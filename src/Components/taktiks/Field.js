import React from "react";

const Coordinates = [
  { /* kaleci */ min: { x: 302, y: 702 }, max: { x: 349, y: 595 } },
  { /* stoperler */ min: { x: 353, y: 809 }, max: { x: 673, y: 496 } },
  { /* arka alt stoperler */ min: { x: 302, y: 809 }, max: { x: 351, y: 709 } },
  { /* arka üst stoperler */ min: { x: 304, y: 595 }, max: { x: 354, y: 496 } },
  { /* sahte defanslar */ min: { x: 676, y: 809 }, max: { x: 877, y: 496 } },
  { /* Bekler üst */ min: { x: 302, y: 496 }, max: { x: 672, y: 256 } },
  { /* sahte bekler üst */ min: { x: 672, y: 496 }, max: { x: 877, y: 256 } },
  {
    /* Sahte kanatlar üst */ min: { x: 877, y: 496 },
    max: { x: 1076, y: 256 },
  },
  { /* kanatlar üst */ min: { x: 1076, y: 496 }, max: { x: 1493, y: 256 } },
  { /* bekler Alt */ min: { x: 306, y: 1051 }, max: { x: 673, y: 811 } },
  { /* sahte bekler alt */ min: { x: 673, y: 1051 }, max: { x: 877, y: 811 } },
  {
    /* sahte kanatlar alt */ min: { x: 877, y: 1051 },
    max: { x: 1075, y: 811 },
  },
  { /* kanatlar alt */ min: { x: 1075, y: 1051 }, max: { x: 1493, y: 811 } },
  { /* orta saha */ min: { x: 881, y: 809 }, max: { x: 1077, y: 496 } },
  { /* forvet arkası */ min: { x: 1077, y: 809 }, max: { x: 1355, y: 496 } },
  { /* forvet */ min: { x: 1355, y: 809 }, max: { x: 1493, y: 497 } },
];

const Field = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "1500px",
        height: "1100px",
      }}
    >
      {Coordinates.map((coord, index) => {
        const width = coord.max.x - coord.min.x;
        const height = coord.min.y - coord.max.y;
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${coord.min.x}px`,
              top: `${coord.max.y}px`,
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: "rgba(0, 128, 255, 0.3)",
              border: "1px solid #0077ff",
            }}
          />
        );
      })}
    </div>
  );
};

export default Field;
