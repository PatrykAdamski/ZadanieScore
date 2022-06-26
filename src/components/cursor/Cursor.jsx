import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { CanvasContext } from "../../providers/CanvasProvider";

export const Cursor = () => {
  const { size, brushColor } = useContext(CanvasContext);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
  }, []);

  const styles = {
    position: "absolute",
    top: mousePosition.y - size / 2,
    left: mousePosition.x - size / 2,
    backgroundColor: brushColor,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: `50%`,
    pointerEvents: "none",
  };

  return <div style={styles} />;
};
