import React, { useRef, useState } from "react";

export const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [size, setSize] = useState(10);
  const [brushColor, setBrushColor] = useState("black");

  const startCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2 - 400;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvasRef.current.getContext("2d");
    context.scale(2, 2);
    contextRef.current = context;
    contextRef.current.lineCap = "round";
  };
  const setContext = () => {
    contextRef.current.lineWidth = size;
    contextRef.current.strokeStyle = brushColor;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };
  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        startCanvas,
        startDrawing,
        finishDrawing,
        draw,
        clearCanvas,
        setContext,
        setSize,
        size,
        brushColor,
        setBrushColor,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};
