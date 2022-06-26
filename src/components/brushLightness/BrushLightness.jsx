import React, { useContext, useState } from "react";
import { CanvasContext } from "../../providers/CanvasProvider";
import Slider from "@mui/material/Slider";

export const BrushLightness = () => {
  const { setBrushLightness } = useContext(CanvasContext);

  return (
    <>
      <p className="dashboard__brush-title">Brush Lightness</p>
      <Slider
        min={0}
        max={200}
        onChange={(e) => setBrushLightness(e.target.value)}
        defaultValue={100}
        valueLabelDisplay="auto"
      />
    </>
  );
};
