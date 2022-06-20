import React, { useEffect, useContext } from "react";
import { CanvasContext } from "../../providers/CanvasProvider";
export const Canvas = () => {
  const {
    startCanvas,
    startDrawing,
    finishDrawing,
    draw,
    canvasRef,
    size,
    brushColor,
    setContext,
  } = useContext(CanvasContext);

  useEffect(() => {
    startCanvas();
  }, []);

  useEffect(() => {
    setContext();
  }, [size, brushColor]);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    ></canvas>
  );
};
