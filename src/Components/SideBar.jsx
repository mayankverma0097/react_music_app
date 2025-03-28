import React, { useState } from "react";
import "./SideBar.css";
import { House, Search, BookOpen, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar() {
  let [isOpen, setisOpen] = useState(false);

  function toggleSidebar() {
    setisOpen(!isOpen);
    console.log("toggle button clicked");
  }
  return (
    <div>
      <div id="SideBar_Main" className={`${isOpen ? "Open" : ""}`}>
        <p id="SideBar_Main_siteName">
          <Link to={"/"}>WaveTune</Link>
        </p>

        <ul>
          <li>
            <Link to={"/Home"}>
              {" "}
              <House size={20} /> <span className="SideBar_P">Home</span>
            </Link>
          </li>

          <li>
            {" "}
            <Link to={"/Home"}>
              {" "}
              <Search size={20} /> <span className="SideBar_P">Search</span>
            </Link>
          </li>

          <li>
            <Link to={"/Home"}>
              {" "}
              <BookOpen size={20} /> <span className="SideBar_P">Library</span>
            </Link>
          </li>
        </ul>

        <div id="SideBar_Toggle_button" onClick={toggleSidebar}>
          <Menu color="teal" strokeWidth={4} size={30}/>
        </div>
      </div>
    </div>
  );
}
