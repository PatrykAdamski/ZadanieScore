import React, { useContext } from "react";
import { CanvasContext } from "../../providers/CanvasProvider";
import { BrushColor } from "../brushColor/BrushColor";
import { BrushLightness } from "../brushLightness/BrushLightness";
import { BrushPreviw } from "../brushPreview/BrushPreviw";
import { BrushSize } from "../brushSize/BrushSize";
import { Button } from "../button/Button";

export const Dashboard = () => {
  const { clearCanvas } = useContext(CanvasContext);

  return (
    <header className="dashboard">
      <div className="dashboard__brush-container">
        <BrushPreviw />
      </div>
      <div className="dashboard__brush-container">
        <BrushSize />
      </div>
      <div className="dashboard__brush-container">
        <BrushColor />
      </div>
      <div className="dashboard__brush-container">
        <p className="dashboard__brush-title">Tools</p>
        <div className="dashboard__brush-tools"></div>
      </div>
      <div className="dashboard__brush-container">
        <BrushLightness />
      </div>
      <div className="dashboard__btn-container">
        <Button onClick={clearCanvas} content={"Clear"} />
      </div>
    </header>
  );
};
