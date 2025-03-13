import React from "react";
import "./GetStarted.css";
import GetStarted_img from "../src/assets/audio.jpg";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div>
      <div id="GetStarted_Main">
        <img src={GetStarted_img} alt="" />
      </div>
      <div id="GetStarted_box">
        <div id="GetStarted_content">
          <p>Audio X</p>
          <p>Listen to free music from your favorite artists.</p>
          <Link to={"/Home"}><button>Get Started</button></Link>
        </div>
      </div>
    </div>
  );
}
