import React, { useState } from "react";
import "./Artists.css";
import SideBar from "./Components/SideBar";
import { Search, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import artist1 from "../src/assets/artist1.png";
import artist2 from "../src/assets/artist2.png";
import artist3 from "../src/assets/artist3.png";
import artist4 from "../src/assets/artist4.png";

export default function Artists({setSelectedArtist}) {
  let Navigate = useNavigate();
  let [SearchArtist,setSearchArtist]=useState("")
  let [Artists, setArtists] = useState([
    
    {
      id: 1,
      artistName: "Adele",
      artistImage:
        "https://www.billboard.com/wp-content/uploads/media/adele-press-bw-2016-billboard-1548.jpg?w=942&h=623&crop=1",
    },
    {
      id: 2,
      artistName: "Enrique Iglesias",
      artistImage:
        "https://www.billboard.com/wp-content/uploads/2020/10/02-Enrique-Iglesias-cr-Zony-Maya-2020-billboard-1548-1603130984.jpg?w=942&h=623&crop=1",
    },
    {
      id: 21,
      artistName: "Marshmallow",
      artistImage:
        "https://www.foodandwine.com/thmb/0-9ugUIMuA4TpyJqdpZSGkVMMbM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cooking-with-marshmello-ft-blog0218-e5c9d7246c03469cb70ae163852e1bd6.jpg",
    },
    {
      id: 3,
      artistName: "Taylor Swift",
      artistImage:
        "https://hls.harvard.edu/wp-content/uploads/2024/04/Taylor-Swift-concert-yellow-dress-GettyImages-2015112497-2400x1600-1-1500x1000.jpg",
    },
    {
      id: 4,
      artistName: "Drake",
      artistImage:
        "https://cdn.britannica.com/37/231937-050-9228ECA1/Drake-rapper-2019.jpg?w=400&h=300&c=crop",
    },
    {
      id: 5,
      artistName: "Billie Eilish",
      artistImage:
        "https://back.3blcdn.com/images/sites/default/files/styles/ratio_3_2/public/triplepundit/wide/Support%20and%20Feed%20Billie%20Eilish.jpg?h=9c17b57b&width=640&format=auto",
    },
    {
      id: 6,
      artistName: "Bruno Mars",
      artistImage:
        "https://ew.com/thmb/WhmFKloYCWVKMkDBrMeYCHQtPcU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bruno-mars_0-4d3e8ba6593f403d85083e85810086db.jpg",
    },
    {
      id: 7,
      artistName: "The Weeknd",
      artistImage:
        "https://www.krock.com.au/wp-content/uploads/sites/32/2025/01/202501014-theweeknd-feature.jpg?w=1200",
    },
    {
      id: 8,
      artistName: "Kendrick Lamar",
      artistImage:
        "https://www.billboard.com/wp-content/uploads/2025/02/kendrick-lamar-grammys-win-2025-billboard-1548.jpg",
    },
    {
      id: 9,
      artistName: "Beyoncé",
      artistImage:
        "https://www.billboard.com/wp-content/uploads/2022/06/Beyonce-cr-Courtesy-of-Parkwood-Entertainment-press-2022-billboard-1548.jpg?w=942&h=623&crop=1",
    },
    {
      id: 10,
      artistName: "Shawn Mendes",
      artistImage:
        "https://www.rollingstone.com/wp-content/uploads/2024/08/shawn-mendes-why-why-why-song.jpg",
    },
    {
      id: 11,
      artistName: "Katy Perry",
      artistImage:
        "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/08/896/500/katy-perry.jpg?ve=1&tl=1",
    },
    {
      id: 12,
      artistName: "Post Malone",
      artistImage:
        "https://www.billboard.com/wp-content/uploads/media/post-malone-live-sept-13-2017-billboard-1548.jpg?w=942&h=623&crop=1",
    },
    {
      id: 13,
      artistName: "Travis Scott",
      artistImage:
        "https://www.usatoday.com/gcdn/presto/2021/11/06/USAT/284899c9-bcb4-4b56-b5df-59d75803d411-GTY_1351603671.jpg",
    },
    {
      id: 14,
      artistName: "Sia",
      artistImage:
        "https://ew.com/thmb/ip8dLp1CYxVWPe8_QqnArwVIvxo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-481403959-4d3f258e53a44691b2c8af6c99b6e6ed.jpg",
    },
    {
      id: 15,
      artistName: "Lady Gaga",
      artistImage:
        "https://cdn.britannica.com/57/136557-050-0FFC3C93/Lady-Gaga-ceremony-Grammy-Awards-Los-Angeles-Jan-31-2010.jpg",
    },
    {
      id: 16,
      artistName: "Imagine Dragons",
      artistImage:
        "https://prismic-images.tmol.io/ticketmaster-tm-global/35d25839-82ef-4531-8ecf-42f9498fd241_Imagine+Dragons+header.jpg?auto=compress,format&rect=65,0,2297,969&w=1024&h=432",
    },
    {
      id: 17,
      artistName: "Ariana Grande",
      artistImage:
        "https://assets.teenvogue.com/photos/613b5fd248eda7f19679403c/16:9/w_2560%2Cc_limit/1235152164",
    },
    {
      id: 18,
      artistName: "Rihanna",
      artistImage:
        "https://www.iconocast.com/blog/wp-content/uploads/2025/03/2024-04-17t223927z-1245219260-rc2m87apuacy-rtrmadp-3-fashion-rihanna-puma-copy.jpg",
    },
    {
      id: 19,
      artistName: "Coldplay",
      artistImage:
        "https://variety.com/wp-content/uploads/2023/03/Coldplay-Music-Of-The-Spheres-Live-At-River-Plate.jpg?w=1000&h=564&crop=1",
    },
    {
      id: 20,
      artistName: "Lizzo",
      artistImage:
        "https://www.rollingstone.com/wp-content/uploads/2025/02/lizzo-returns-to-music.jpg?w=1581&h=1054&crop=1",
    },
  ]);

  let filetredArtist=Artists.filter((i)=>i.artistName.toLowerCase().includes(SearchArtist.toLowerCase()))
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
                setSearchArtist(e.target[0].value)
                e.target.reset();
              }}
            >
              <input type="text" placeholder="Enter Artist" onChange={(e)=>{
                // console.log(e.target.value);
                setSearchArtist(e.target.value)
              }} />
              <button>{<Search size={20} />}</button>
            </form>
          </div>

          <div id="Artists_Box">
            {filetredArtist.map((i) => (
              <div className="Artists_ChildBox" key={i.id}>
                <div
                  className="Artists_ChildBox_a"
                  onClick={() => {
                    console.log("Artist Clicked");
                    setSelectedArtist(i)
                    Navigate("/ParticularArtist");
                  }}
                >
                  <div className="Artists_ChildBox_a_img">
                    <img src={i.artistImage} alt="" />
                  </div>
                  <div className="Artists_ChildBox_a_Content">
                    <p>{i.artistName}</p>
                    <p>Artist</p>
                  </div>
                </div>
                <div className="Artists_ChildBox_b">{<ChevronRight size={30} strokeWidth={3}/>}</div>
              </div>
            ))}
          </div>


              {/* {console.log(filetredArtist)} */}


        </div>
      </div>
    </div>
  );
}
