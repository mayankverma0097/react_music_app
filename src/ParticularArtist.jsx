import React from "react";
import "./ParticularArtist.css";
import SideBar from "./Components/SideBar";
import audio_img from "../src/assets/audio.jpg";
import { Play, Heart } from "lucide-react";
import myimg from "../src/assets/myImg.jpg";
import Song1_img from "../src/assets/Song1_img.jpeg";
import harry_adward from "../src/assets/harry_adward.jpg";
import { Link } from "react-router-dom";

export default function ParticularArtist() {
  return (
    <div>
      <div id="ParticularArtist_Main">
        <SideBar />

        <div id="ParticularArtist_Content">
          <div id="ParticularArtist_Top1">
            <img src={harry_adward} alt="" />
            <div id="ParticularArtist_Top1_imgBox"></div>
          </div>

          <div id="ParticularArtist_About">
            <div>
              <p>Harry Edward</p>
              <p>
                <span>31,654,432</span> monthly listeners
              </p>
            </div>
            <div>{<Play size={20} fill="white" />}</div>
          </div>

          <div id="ParticularArtist_Songs">
            <div className="ParticularArtist_Songs_box">
              <Link to={"/ListenSong"}>
                <div className="ParticularArtist_Songs_a">
                  <img src={Song1_img} alt="" />
                  <div>
                    <p>Melbourne Sunset</p>
                    <p>2,276,876</p>
                  </div>
                </div>
              </Link>

              <div className="ParticularArtist_Songs_b">{<Heart />}</div>
            </div>

            <div className="ParticularArtist_Songs_box">
              <div className="ParticularArtist_Songs_a">
                <img src={Song1_img} alt="" />
                <div>
                  <p>Melbourne Sunset</p>
                  <p>2,276,876</p>
                </div>
              </div>
              <div className="ParticularArtist_Songs_b">{<Heart />}</div>
            </div>

            <div className="ParticularArtist_Songs_box">
              <div className="ParticularArtist_Songs_a">
                <img src={Song1_img} alt="" />
                <div>
                  <p>Melbourne Sunset</p>
                  <p>2,276,876</p>
                </div>
              </div>
              <div className="ParticularArtist_Songs_b">{<Heart />}</div>
            </div>

            <div className="ParticularArtist_Songs_box">
              <div className="ParticularArtist_Songs_a">
                <img src={Song1_img} alt="" />
                <div>
                  <p>Melbourne Sunset</p>
                  <p>2,276,876</p>
                </div>
              </div>
              <div className="ParticularArtist_Songs_b">{<Heart />}</div>
            </div>

            <div className="ParticularArtist_Songs_box">
              <div className="ParticularArtist_Songs_a">
                <img src={Song1_img} alt="" />
                <div>
                  <p>Melbourne Sunset</p>
                  <p>2,276,876</p>
                </div>
              </div>
              <div className="ParticularArtist_Songs_b">{<Heart />}</div>
            </div>

            <div className="ParticularArtist_Songs_box">
              <div className="ParticularArtist_Songs_a">
                <img src={Song1_img} alt="" />
                <div>
                  <p>Melbourne Sunset</p>
                  <p>2,276,876</p>
                </div>
              </div>
              <div className="ParticularArtist_Songs_b">{<Heart />}</div>
            </div>

            <div className="ParticularArtist_Songs_box">
              <div className="ParticularArtist_Songs_a">
                <img src={Song1_img} alt="" />
                <div>
                  <p>Melbourne Sunset</p>
                  <p>2,276,876</p>
                </div>
              </div>
              <div className="ParticularArtist_Songs_b">{<Heart />}</div>
            </div>

            <div className="ParticularArtist_Songs_box">
              <div className="ParticularArtist_Songs_a">
                <img src={Song1_img} alt="" />
                <div>
                  <p>Melbourne Sunset</p>
                  <p>2,276,876</p>
                </div>
              </div>
              <div className="ParticularArtist_Songs_b">{<Heart />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
