import React from "react";

const Background = () => {
  const styled = {
    position: "absolute",
    bottom: "0",
    left: "0",
    transform: "rotate(180deg)",
    opacity: "30%",
  };

  return (
    <div>
      <img
        width="100%"
        height="100%"
        src="../../../images/pattern-background-desktop.svg"
      ></img>
      <img
        style={styled}
        width="100%"
        height="100%"
        src="../../../images/pattern-background-desktop.svg"
      ></img>
    </div>
  );
};

export default Background;
