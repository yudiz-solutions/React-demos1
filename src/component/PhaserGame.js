import React from "react";
import Iframe from "react-iframe";

const PhaserGame = () => {
  let window_width = window.innerWidth.toFixed(4);
  const Finalwidth = `${window_width}px`;
  const height = `${(window_width / 2.53).toFixed(0)}px`;
  return (
    <>
      <div className="iframes">
        <Iframe
          url="https://demos.yudiz.com/html5/game-jam/"
          width={Finalwidth}
          height={height}
          className="iframe"
          // allow="fullscreen"
        />
      </div>
    </>
  );
};

export default PhaserGame;
