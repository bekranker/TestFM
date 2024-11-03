import React, { useRef, useState } from "react";
import "../css/shape.css";

export const DashedCircle = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [circles, setCircles] = useState([]);

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

    // Tüm daireleri yeniden çizmek için canvas'ı temizle
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Mevcut daireleri çiz
    circles.forEach((circle) => {
      ctx.beginPath();
      ctx.setLineDash([5, 5]); // Kesik çizgi
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]); // Kesik çizgiyi kapat
    });

    // Yeni daireyi geçici olarak çiz
    const radius = Math.sqrt(
      Math.pow(currentX - startPos.x, 2) + Math.pow(currentY - startPos.y, 2)
    );
    ctx.beginPath();
    ctx.setLineDash([5, 5]); // Kesik çizgi
    ctx.arc(startPos.x, startPos.y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]); // Kesik çizgiyi kapat
  };

  const handleMouseUp = (e) => {
    if (!isDrawing) return;
    setIsDrawing(false);

    const rect = canvasRef.current.getBoundingClientRect();
    const endPos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    // Yeni daireyi kaydet
    const radius = Math.sqrt(
      Math.pow(endPos.x - startPos.x, 2) + Math.pow(endPos.y - startPos.y, 2)
    );
    const newCircle = {
      x: startPos.x,
      y: startPos.y,
      radius: radius,
    };

    setCircles([...circles, newCircle]); // Daireyi diziye ekle
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
