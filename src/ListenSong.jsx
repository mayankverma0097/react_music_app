import React from "react";
import "./ListenSong.css";
import SideBar from "./Components/SideBar";
import Song1_image from "../src/assets/Song1_image.png";
import Song2_image from "../src/assets/Song2_image.jpg";
import { Repeat2, Rewind, Play, FastForward, Shuffle } from "lucide-react";

export default function ListenSong() {
  return (
    <div>
      <div id="ListenSong_Main">
        <SideBar />

        <div id="ListenSong_Content">
          <div id="ListenSong_Top1">
            <img src={Song2_image} alt="" />
            <div id="ListenSong_info">
              <p>Melbourne Sunset</p>
              <p>3000 Days</p>
            </div>
          </div>

          <div id="ListenSong_Range">
            <input type="range" />
          </div>

          <div id="ListenSong_Controls">
            <div>
              <button>{<Repeat2 />}</button>
            </div>
            <div>
              <button>{<Rewind />} </button>
            </div>
            <div id="ListenSong_Controls_Play">
              <button id="ListenSong_Controls_Play_button">
                {<Play fill="white" />}
              </button>
            </div>
            <div>
              <button>{<FastForward />}</button>
            </div>
            <div>
              <button>{<Shuffle />}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
