import React, { useRef, useState } from "react";
import { useEffect } from "react";

export const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [undoSteps, setUndoSteps] = useState({});
  const [undo, setUndo] = useState(0);

  const [size, setSize] = useState(10);
  const [brushColor, setBrushColor] = useState("black");
  const [brushLightness, setBrushLightness] = useState("100");

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
    contextRef.current.filter = `brightness(${brushLightness}%)`;
    contextRef.current.strokeStyle = brushColor;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setUndoSteps({ ...undoSteps, [undo + 1]: [{ offsetX, offsetY }] });
    setUndo(undo + 1);
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
    const temp = {
      ...undoSteps,
    };
    temp[undo].push({ offsetX, offsetY });
    setUndoSteps(temp);
  };

  const undoLastOperation = (e) => {
    if (e.ctrlKey && e.key === "z") {
      const data = undoSteps[undo];
      contextRef.current.strokeStyle = "white";
      contextRef.current.beginPath();
      contextRef.current.lineWidth = 20;
      contextRef.current.moveTo(data[0].offsetX, data[0].offsetY);
      data.forEach((item, index) => {
        if (index !== 0) {
          contextRef.current.lineTo(item.offsetX, item.offsetY);
          contextRef.current.stroke();
        }
      });
      contextRef.current.closePath();
      contextRef.current.strokeStyle = brushColor;
      contextRef.current.lineWidth = size;

      const temp = {
        ...undoSteps,
        [undo]: [],
      };
      setUndo(undo - 1);
      setUndoSteps(temp);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    document.addEventListener("keydown", undoLastOperation);

    return () => {
      document.removeEventListener("keydown", undoLastOperation);
    };
  }, [undoSteps]);

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
        undoLastOperation,
        setBrushLightness,
        brushLightness,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};
