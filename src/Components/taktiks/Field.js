import React from "react";

const Coordinates = [
  { /* kaleci */ min: { x: 302, y: 642 }, max: { x: 349, y: 535 } },
  { /* stoperler */ min: { x: 353, y: 749 }, max: { x: 673, y: 436 } },
  { /* arka alt stoperler */ min: { x: 302, y: 749 }, max: { x: 351, y: 649 } },
  { /* arka üst stoperler */ min: { x: 304, y: 535 }, max: { x: 354, y: 436 } },
  { /* sahte defanslar */ min: { x: 676, y: 749 }, max: { x: 877, y: 436 } },
  { /* Bekler üst */ min: { x: 302, y: 436 }, max: { x: 672, y: 196 } },
  { /* sahte bekler üst */ min: { x: 672, y: 436 }, max: { x: 877, y: 196 } },
  {
    /* Sahte kanatlar üst */ min: { x: 877, y: 436 },
    max: { x: 1076, y: 196 },
  },
  { /* kanatlar üst */ min: { x: 1076, y: 436 }, max: { x: 1493, y: 196 } },
  { /* bekler Alt */ min: { x: 306, y: 991 }, max: { x: 673, y: 751 } },
  { /* sahte bekler alt */ min: { x: 673, y: 991 }, max: { x: 877, y: 751 } },
  {
    /* sahte kanatlar alt */ min: { x: 877, y: 991 },
    max: { x: 1075, y: 751 },
  },
  { /* kanatlar alt */ min: { x: 1075, y: 991 }, max: { x: 1493, y: 751 } },
  { /* orta saha */ min: { x: 881, y: 749 }, max: { x: 1077, y: 436 } },
  { /* forvet arkası */ min: { x: 1077, y: 749 }, max: { x: 1355, y: 436 } },
  { /* forvet */ min: { x: 1355, y: 749 }, max: { x: 1493, y: 437 } },
];

const Field = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
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
