import React, { useRef, useState } from "react";
import "../css/shape.css";

export const ShapeSquare = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [squares, setSquares] = useState([]);

  const handleMouseDown = (e) => {
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

    // Canvas'ı temizleyip tüm kareleri yeniden çiz
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Mevcut kareleri çiz
    squares.forEach((square) => {
      ctx.beginPath();
      ctx.rect(square.x, square.y, square.width, square.height);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Yeni kareyi geçici olarak çiz
    const width = currentX - startPos.x;
    const height = currentY - startPos.y;
    ctx.beginPath();
    ctx.rect(startPos.x, startPos.y, width, height);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const handleMouseUp = (e) => {
    if (!isDrawing) return;
    setIsDrawing(false);

    const rect = canvasRef.current.getBoundingClientRect();
    const endPos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    // Yeni çizilen kareyi kaydet
    const newSquare = {
      x: startPos.x,
      y: startPos.y,
      width: endPos.x - startPos.x,
      height: endPos.y - startPos.y,
    };

    setSquares([...squares, newSquare]); // Kareyi diziye ekle
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
    />
  );
};
