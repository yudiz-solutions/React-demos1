import React from "react";
import GameSlider from "./GameSlider";
import Sliderbar from "./Sliderbar";

function Mainlayout() {
  return (
    <>
      <section className="main-layout">
        <section className="header"></section>
        <section className="chield_layout">
          <section className="slider_bar">{<Sliderbar />}</section>
          <section className="Game_layout">
            <section className="slider">{<GameSlider />}</section>
            <section className="slider">{<GameSlider />}</section>
            <section className="slider">{<GameSlider />}</section>
            <section className="slider">{<GameSlider />}</section>
            <section className="slider">{<GameSlider />}</section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Mainlayout;
