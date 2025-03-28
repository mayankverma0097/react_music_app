import React from "react";
import "./GetStarted.css";
import GetStarted_img from "../src/assets/audio.jpg";
import GetStarted_disk1 from "../src/assets/GetStarted_disk1.jpg";
import GetStarted_disk2 from "../src/assets/GetStarted_disk2.jpg";
import GetStarted_Cassete1 from "../src/assets/GetStarted_Cassete1.jpg";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div>
      <div id="GetStarted_Main">
        <div id="GetStarted_box_left"></div>

        <div id="GetStarted_box_right">
          <div id="GetStarted_content">
            <p>WaveTune</p>
            <p>Listen to free music from your favorite artists.</p>
            <Link to={"/Home"}>
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
