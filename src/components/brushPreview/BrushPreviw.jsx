import React, { useContext } from "react";
import { CanvasContext } from "../../providers/CanvasProvider";

export const BrushPreviw = () => {
  const { size, brushColor } = useContext(CanvasContext);

  const styles = {
    backgroundColor: brushColor,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: `50%`,
  };

  return (
    <>
      <p className="dashboard__brush-title">Brush Preview</p>
      <div className="brush-preview">
        <div style={styles}></div>
      </div>
    </>
  );
};
