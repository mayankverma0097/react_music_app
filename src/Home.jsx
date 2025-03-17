import React from "react";
import SideBar from "./Components/SideBar";
import "./Home.css";
import { Bell, Play } from "lucide-react";
import myImg from "../src/assets/myImg.jpg";
import top_3_img1 from "../src/assets/top3_img1.jpg";
import top_3_img2 from "../src/assets/top3_img2.jpg";
import top_3_img3 from "../src/assets/top3_img3.jpg";
import top_3_img4 from "../src/assets/top3_img4.jpeg";

import top4_img1 from "../src/assets/top4_img1.jpg";
import top4_img2 from "../src/assets/top4_img2.jpeg";
import top4_img3 from "../src/assets/top4_img3.jpeg";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div id="Home_Main">
        <SideBar />

        <div id="Home_Content">
          <div id="Home_top1">
            <div className="Home_top1_a">
              <p>Good afternoon,Mayank!</p>
            </div>
            <div className="Home_top1_b">
              <Bell size={20} />
              <img src={myImg} alt="" />
            </div>
          </div>

          <div id="Home_top2">
            <div className="Home_top2_a">
              <p>Pick up where you left off</p>
            </div>
            <div className="Home_top2_b">view all</div>
          </div>

          <div id="Home_top3">
            <div className="Home_top3_box">
              <img src={top_3_img1} alt="" />
              <div className="Home_top3_childbox" id="Home_top3_childbox1">
                <p>Chill</p>
                <p>Study Beats</p>
              </div>
            </div>
            <div className="Home_top3_box">
              <img src={top_3_img2} alt="" />
              <div className="Home_top3_childbox" id="Home_top3_childbox2">
                <p>Jazzy</p>
                <p>Rainy Morning</p>
              </div>
            </div>
            <div className="Home_top3_box">
              <img src={top_3_img3} alt="" />
              <div className="Home_top3_childbox" id="Home_top3_childbox3">
                <p>Weekend</p>
                <p>Skate Punk</p>
              </div>
            </div>
            <div className="Home_top3_box">
              <img src={top_3_img4} alt="" />
              <div className="Home_top3_childbox" id="Home_top3_childbox4">
                <p>Traditional</p>
                <p>Folk Music</p>
              </div>
            </div>
          </div>

          <div id="Home_top4">
            <p>For you</p>
            <p>View All</p>
          </div>

          <div id="Home_top5">
            <div className="Home_top5_box">
              <img src={top4_img1} alt="" />
              <Link to={"/Artists"}>
                <div className="Home_top5_childbox">
                  <p>Your Top</p>
                  <p>Artists</p>
                </div>
              </Link>
            </div>

            <div className="Home_top5_box">
              <img src={top4_img2} alt="" />
              <div className="Home_top5_childbox">
                <p>Best of</p>
                <p>Pop Music</p>
              </div>
            </div>
            <div className="Home_top5_box">
              <img src={top4_img3} alt="" />
              <div className="Home_top5_childbox">
                <p>Your Year</p>
                <p>2025</p>
              </div>
            </div>
          </div>

          <div id="Home_top6">
            <p className="Home_top6_popular_songs_a_p1">Popular Songs</p>

            <div className="Home_top6_popular_songs">
              <div className="Home_top6_popular_songs_a">
                <div>
                  <img src={myImg} alt="" />
                </div>
                <div>
                  <p className="Home_top6_popular_songs_a_p2">Cail Living</p>
                  <p className="Home_top6_popular_songs_a_p3">Mayank</p>
                </div>
              </div>
              <div className="Home_top6_popular_songs_b">
                {<Play size={20} fill="white" />}
              </div>
            </div>

            <div className="Home_top6_popular_songs">
              <div className="Home_top6_popular_songs_a">
                <div>
                  <img src={myImg} alt="" />
                </div>
                <div>
                  <p className="Home_top6_popular_songs_a_p2">Cail Living</p>
                  <p className="Home_top6_popular_songs_a_p3">Mayank</p>
                </div>
              </div>
              <div className="Home_top6_popular_songs_b">
                {<Play size={20} fill="white" />}
              </div>
            </div>

            <div className="Home_top6_popular_songs">
              <div className="Home_top6_popular_songs_a">
                <div>
                  <img src={myImg} alt="" />
                </div>
                <div>
                  <p className="Home_top6_popular_songs_a_p2">Cail Living</p>
                  <p className="Home_top6_popular_songs_a_p3">Mayank</p>
                </div>
              </div>
              <div className="Home_top6_popular_songs_b">
                {<Play size={20} fill="white" />}
              </div>
            </div>

            {/* <div className="Home_top6_popular_songs">
            <div className="Home_top6_popular_songs_a"></div>
            <div className="Home_top6_popular_songs_b"></div>
          </div>

          <div className="Home_top6_popular_songs">
            <div className="Home_top6_popular_songs_a"></div>
            <div className="Home_top6_popular_songs_b"></div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
