import React, { useContext } from "react";
import { CanvasContext } from "../../providers/CanvasProvider";

export const BrushColor = () => {
  const { setBrushColor, brushColor } = useContext(CanvasContext);

  const styles = {
    width: `150px`,
    height: `30px`,
    backgroundColor: `${brushColor}`,
  };

  return (
    <>
      <p className="dashboard__brush-title">Brush Color</p>
      <div style={styles}></div>
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
