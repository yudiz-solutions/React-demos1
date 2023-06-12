import React from "react";
import { NavLink } from "react-router-dom";

function Sliderbar() {
  return (
    <div className="slider_bar_type">
      <ul>
        <li>
          <NavLink to="/Game1">Game1</NavLink>
        </li>
        <li>
          <NavLink to="/Game2">Game2</NavLink>
        </li>
        <li>
          <NavLink to="/Game3">Game3</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sliderbar;