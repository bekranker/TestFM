import React, { useRef, useState } from "react";
import "../css/shape.css";

export const DashedRectangle = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [squares, setSquares] = useState([]);

  const handleMouseDown = (e) => {
    // Sadece sol tıklama (button 0) için çizim başlat
    if (e.button !== 0) return;

    const rect = canvasRef.current.getBoundingClientRect();
    setStartPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsDrawing(true);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    // Canvas'ı temizlemeden mevcut kareleri ve geçici kareyi çiz
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Kalıcı kareleri çiz
    squares.forEach((square) => {
      ctx.beginPath();
      ctx.setLineDash([5, 3]); // Kesik çizgi için ayar
      ctx.rect(square.x, square.y, square.width, square.height);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]); // Normal çizime geri dön
    });

    // Geçici kareyi çiz
    const width = currentX - startPos.x;
    const height = currentY - startPos.y;
    ctx.beginPath();
    ctx.setLineDash([5, 3]); // Kesik çizgi için ayar
    ctx.rect(startPos.x, startPos.y, width, height);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]); // Normal çizime geri dön
  };

  const handleMouseUp = (e) => {
    if (!isDrawing) return;
    setIsDrawing(false);

    const rect = canvasRef.current.getBoundingClientRect();
    const endPos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    // Yeni çizilen kareyi kalıcı olarak ekle
    const newSquare = {
      x: startPos.x,
      y: startPos.y,
      width: endPos.x - startPos.x,
      height: endPos.y - startPos.y,
    };

    setSquares([...squares, newSquare]);
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Sağ tık menüsünü devre dışı bırak
    const rect = canvasRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Tıklanan noktaya yakın bir kareyi bulun ve kaldır
    const updatedSquares = squares.filter(
      (square) =>
        !(
          clickX >= square.x &&
          clickX <= square.x + square.width &&
          clickY >= square.y &&
          clickY <= square.y + square.height
        )
    );

    setSquares(updatedSquares);
    redrawCanvas(updatedSquares);
  };

  const redrawCanvas = (squares, tempSquare = null) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Kalıcı kareleri çiz
    squares.forEach((square) => {
      ctx.beginPath();
      ctx.setLineDash([5, 3]);
      ctx.rect(square.x, square.y, square.width, square.height);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]);
    });

    // Geçici kare varsa, onu da çiz
    if (tempSquare) {
      ctx.beginPath();
      ctx.setLineDash([5, 3]);
      ctx.rect(tempSquare.x, tempSquare.y, tempSquare.width, tempSquare.height);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]);
    }
  };

  return (
    <canvas
      width={"1200px"}
      height={"800px"}
      ref={canvasRef}
      className="shape"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onContextMenu={handleContextMenu} // Sağ tık olayını dinle
    />
  );
};
