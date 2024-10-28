import React, { useState } from "react";

function DrawSquare() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [endPos, setEndPos] = useState({ x: 0, y: 0 });
  const [squares, setSquares] = useState([]);

  const handleMouseDown = (e) => {
    // Sol tıklama ile çizime başla
    if (e.button === 0) {
      setIsDrawing(true);
      setStartPos({ x: e.clientX, y: e.clientY });
      setEndPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    setEndPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e) => {
    // Sol tıklama ile çizim tamamlandığında kareyi ekle
    if (e.button === 0) {
      setIsDrawing(false);
      setSquares((prevSquares) => [
        ...prevSquares,
        {
          startPos,
          endPos,
          name: "", // Her kare için isim başlangıçta boş
        },
      ]);
    }
  };

  const handleRightClick = (e, index) => {
    e.preventDefault(); // Sağ tık menüsünü engelle
    setSquares((prevSquares) => prevSquares.filter((_, i) => i !== index));
  };

  const handleInputChange = (e, index) => {
    const newSquares = [...squares];
    newSquares[index].name = e.target.value; // İsim güncelle
    setSquares(newSquares);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
      }}
    >
      {/* Çizilen tüm kareleri render et */}
      {squares.map((square, index) => (
        <div
          key={index}
          onContextMenu={(e) => handleRightClick(e, index)} // Sağ tık ile silme
          style={{
            position: "absolute",
            left: Math.min(square.startPos.x, square.endPos.x),
            top: Math.min(square.startPos.y, square.endPos.y),
            width: Math.abs(square.endPos.x - square.startPos.x),
            height: Math.abs(square.endPos.y - square.startPos.y),
            backgroundColor: "rgba(0, 150, 255, 0.5)",
            border: "2px solid blue",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Input alanı */}
          <input
            type="text"
            value={square.name}
            onChange={(e) => handleInputChange(e, index)}
            style={{
              textAlign: "center",
              border: "none",
              backgroundColor: "transparent",
              width: "80%",
            }}
            placeholder="İsim yazın"
          />
          <div style={{ fontSize: "0.8em" }}>
            StartPosition: ({square.startPos.x}, {square.startPos.y})
          </div>
          <div style={{ fontSize: "0.8em" }}>
            EndPosition: ({square.endPos.x}, {square.endPos.y})
          </div>
        </div>
      ))}

      {/* Şu an çizilmekte olan kare */}
      {isDrawing && (
        <div
          style={{
            position: "absolute",
            left: Math.min(startPos.x, endPos.x),
            top: Math.min(startPos.y, endPos.y),
            width: Math.abs(endPos.x - startPos.x),
            height: Math.abs(endPos.y - startPos.y),
            backgroundColor: "rgba(0, 150, 255, 0.5)",
            border: "2px solid blue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Geçici input alanı */}
          <input
            type="text"
            style={{
              textAlign: "center",
              border: "none",
              backgroundColor: "transparent",
              width: "80%",
            }}
            placeholder="İsim yazın"
          />
        </div>
      )}
    </div>
  );
}

export default DrawSquare;
