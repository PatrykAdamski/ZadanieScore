import React, { useContext } from "react";
import { CanvasContext } from "../../providers/CanvasProvider";

export const BrushSize = () => {
  const { setSize } = useContext(CanvasContext);
  return (
    <>
      <p className="dashboard__brush-title">Brush Size</p>
      <div className="dashboard__brush-size">
        <div
          onClick={() => {
            setSize(5);
          }}
          className="brush-size-option"
        >
          small
        </div>
        <div onClick={() => setSize(10)} className="brush-size-option">
          medium
        </div>
        <div onClick={() => setSize(15)} className="brush-size-option">
          big
        </div>
      </div>
    </>
  );
};
