import React from "react";
import PhaserGame from "../component/PhaserGame";
import Sliderbar from "../Main_layout/Sliderbar";
import GameSlider from "../Main_layout/GameSlider";
import AdSense from "react-adsense";

function GamePlay() {
  return (
    <>
      <section className="game_layout">
        <section className="header"></section>
        <section className="chield_layout">
          <section className="slider_bar">{<Sliderbar />}</section>
          <section className="phaserGame">{<PhaserGame />}</section>
          <section className="games"></section>
        </section>
      </section>
    </>
  );
}

export default GamePlay;
