import React, { useRef, useState } from "react";
import "../css/shape.css";

export const DrawLine = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [lines, setLines] = useState([]); // Çizilen tüm çizgileri saklar

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

    // Canvas'ı temizleyin ve tüm çizgileri yeniden çizin
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Kaydedilmiş tüm çizgileri yeniden çizin
    lines.forEach((line) => {
      ctx.beginPath();
      ctx.moveTo(line.startX, line.startY);
      ctx.lineTo(line.endX, line.endY);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Geçici olarak yeni çizgiyi çizin
    ctx.beginPath();
    ctx.moveTo(startPos.x, startPos.y);
    ctx.lineTo(currentX, currentY);
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

    // Yeni çizgiyi kaydet
    const newLine = {
      startX: startPos.x,
      startY: startPos.y,
      endX: endPos.x,
      endY: endPos.y,
    };
    setLines([...lines, newLine]); // Çizgiyi diziye ekle
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
