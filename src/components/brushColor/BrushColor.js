import React, { useContext } from "react";
import { CanvasContext } from "../../providers/CanvasProvider";

export const BrushColor = () => {
  const { setBrushColor } = useContext(CanvasContext);

  return (
    <>
      <p className="dashboard__brush-title">Brush Color</p>
      <div className="dashboard__brush-color-active"></div>
      <div
        onClick={() => {
          setBrushColor("blue");
        }}
        className="brush-color"
      ></div>
      <div onClick={() => setBrushColor("green")} className="brush-color"></div>
      <div onClick={() => setBrushColor("red")} className="brush-color"></div>
      <div
        onClick={() => setBrushColor("yellow")}
        className="brush-color"
      ></div>
    </>
  );
};
