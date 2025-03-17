import React from "react";
import "./Artists.css";
import SideBar from "./Components/SideBar";
import { Search, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import artist1 from "../src/assets/artist1.png";
import artist2 from "../src/assets/artist2.png";
import artist3 from "../src/assets/artist3.png";
import artist4 from "../src/assets/artist4.png";

export default function Artists() {
  return (
    <div>
      <div id="Artists_Main">
        <SideBar />

        <div id="Artists_Content">
          <div id="Artists_Search_Form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target[0].value);
                e.target.reset();
              }}
            >
              <input type="text" placeholder="Enter Artist" />
              <button>{<Search size={20} />}</button>
            </form>
          </div>

          <div id="Artists_Box">
            <div className="Artists_ChildBox">
              <Link to={"/ParticularArtist"}>
                <div className="Artists_ChildBox_a">
                  <div className="Artists_ChildBox_a_img">
                    <img src={artist1} alt="" />
                  </div>
                  <div className="Artists_ChildBox_a_Content">
                    <p>John</p>
                    <p>Artist</p>
                  </div>
                </div>
              </Link>

              <div className="Artists_ChildBox_b">{<ChevronRight />}</div>
            </div>

            <div className="Artists_ChildBox">
              <div className="Artists_ChildBox_a">
                <div className="Artists_ChildBox_a_img">
                  <img src={artist2} alt="" />
                </div>
                <div className="Artists_ChildBox_a_Content">
                  <p>Nancy</p>
                  <p>Artist</p>
                </div>
              </div>
              <div className="Artists_ChildBox_b">{<ChevronRight />}</div>
            </div>

            <div className="Artists_ChildBox">
              <div className="Artists_ChildBox_a">
                <div className="Artists_ChildBox_a_img">
                  <img src={artist3} alt="" />
                </div>
                <div className="Artists_ChildBox_a_Content">
                  <p>Avery</p>
                  <p>Artist</p>
                </div>
              </div>
              <div className="Artists_ChildBox_b">{<ChevronRight />}</div>
            </div>

            <div className="Artists_ChildBox">
              <div className="Artists_ChildBox_a">
                <div className="Artists_ChildBox_a_img">
                  <img src={artist4} alt="" />
                </div>
                <div className="Artists_ChildBox_a_Content">
                  <p>Alice</p>
                  <p>Artist</p>
                </div>
              </div>
              <div className="Artists_ChildBox_b">{<ChevronRight />}</div>
            </div>

            {/* <div className="Artists_ChildBox">
                      <div className="Artists_ChildBox_a">
                        <div className="Artists_ChildBox_a_img"></div>
                        <div className="Artists_ChildBox_a_Content"></div>
                      </div>
                      <div className="Artists_ChildBox_b"></div>
                    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
