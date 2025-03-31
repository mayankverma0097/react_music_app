import React, { useState } from "react";
import "./SideBar.css";
import { House, Search, BookOpen, Menu, X,CircleChevronRight,CircleChevronLeft} from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar() {
  let [isOpen, setisOpen] = useState(false);
  let [ToggleIcon, setToggleIcon] = useState(Menu);
  let [temp, setTemp] = useState(0);
 

  function toggleSidebar() {
    setisOpen(!isOpen);
    if (temp === 0) {
      setToggleIcon(X);
      setTemp(1);
    } else {
      setToggleIcon(Menu);
      setTemp(0);
    }

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
          <ToggleIcon color="white" strokeWidth={2.3} size={25} />
        </div>
      </div>
    </div>
  );
}
