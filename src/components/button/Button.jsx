import React from "react";

export const Button = ({ onClick, content }) => {
  return (
    <button onClick={onClick} className="btn">
      {content}
    </button>
  );
};
