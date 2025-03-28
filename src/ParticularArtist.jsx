import React, { useState } from "react";
import "./ParticularArtist.css";
import SideBar from "./Components/SideBar";
import audio_img from "../src/assets/audio.jpg";
import { Play, Heart } from "lucide-react";
import myimg from "../src/assets/myImg.jpg";
import Song1_img from "../src/assets/Song1_img.jpeg";
import harry_adward from "../src/assets/harry_adward.jpg";
import { Link,useNavigate } from "react-router-dom";

export default function ParticularArtist({ SelectedArtist,setSelectedSong }) {
  let [Song, selectedSong] = useState([
    {
      id: 1,
      songName: "Hello",
      artist: "Adele",
      audio: "https://path/to/hello-audio.mp3",
      songImage:
        "https://dl-asset.cyberlink.com/web/prog/learning-center/html/400/001-Adele-Hello/img/01.jpg",
    },
    {
      id: 2,
      songName: "Shape of You",
      artist: "Ed Sheeran",
      audio: "https://path/to/shape-of-you-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/8/8f/Shape_of_You_%28Ed_Sheeran%29.png",
    },
    {
      id: 3,
      songName: "Bailando",
      artist: "Enrique Iglesias",
      audio: "https://path/to/bailando-audio.mp3",
      songImage:
        "https://www.billboard.com/wp-content/uploads/2021/04/Enrique-Iglesias-Bailando-Music-Video-Still-billboard-1548-1618410005.jpg?w=1024",
    },
    {
      id: 4,
      songName: "Blank Space",
      artist: "Taylor Swift",
      audio: "https://path/to/blank-space-audio.mp3",
      songImage:
        "https://assets.teenvogue.com/photos/568edd5728ef8e4f7849d537/master/pass/taylor_swift_blank_space_a_l.jpg",
    },
    {
      id: 5,
      songName: "God's Plan",
      artist: "Drake",
      audio: "https://path/to/gods-plan-audio.mp3",
      songImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F02%2Fdrake-gods-plan-video-000.jpg?w=960&cbr=1&q=90&fit=max",
    },
    {
      id: 6,
      songName: "Bad Guy",
      artist: "Billie Eilish",
      audio: "https://path/to/bad-guy-audio.mp3",
      songImage:
        "https://www.billboard.com/wp-content/uploads/media/Billie-Eilish-Bad-Guy-screenshot-2019-billboard-1500.jpg",
    },
    {
      id: 7,
      songName: "Uptown Funk",
      artist: "Bruno Mars",
      audio: "https://path/to/uptown-funk-audio.mp3",
      songImage:
        "https://scotscoop.com/wp-content/uploads/2015/02/uptown-900x599.png",
    },
    {
      id: 8,
      songName: "Blinding Lights",
      artist: "The Weeknd",
      audio: "https://path/to/blinding-lights-audio.mp3",
      songImage:
        "https://ca.billboard.com/media-library/image.jpg?id=49347679&width=980",
    },
    {
      id: 9,
      songName: "HUMBLE.",
      artist: "Kendrick Lamar",
      audio: "https://path/to/humble-audio.mp3",
      songImage:
        "https://static0.thethingsimages.com/wordpress/wp-content/uploads/2024/03/kendrick-lamar-s-humble-is-the-best-wake-up-song-according-to-a-study-front-deposit-back-kendrick-lama_youtube.jpg",
    },
    {
      id: 10,
      songName: "Single Ladies (Put a Ring on It)",
      artist: "Beyoncé",
      audio: "https://path/to/single-ladies-audio.mp3",
      songImage:
        "https://www.billboard.com/wp-content/uploads/media/beyonce-single-ladies-put-a-ring-on-it-MV-vid-2018-billboard-fea-1500.jpg?w=1024",
    },
    {
      id: 11,
      songName: "Stitches",
      artist: "Shawn Mendes",
      audio: "https://path/to/stitches-audio.mp3",
      songImage:
        "https://cresshmusic.wordpress.com/wp-content/uploads/2015/09/maxresdefault1.jpg",
    },
    {
      id: 12,
      songName: "Firework",
      artist: "Katy Perry",
      audio: "https://path/to/firework-audio.mp3",
      songImage:
        "https://images.mubicdn.net/images/film/111065/cache-86498-1445942662/image-w1280.jpg",
    },
    {
      id: 13,
      songName: "Circles",
      artist: "Post Malone",
      audio: "https://path/to/circles-audio.mp3",
      songImage:
        "https://imageio.forbes.com/specials-images/imageserve/993062898/Wireless-Festival-2018/960x0.jpg?format=jpg&width=960",
    },
    {
      id: 14,
      songName: "SICKO MODE",
      artist: "Travis Scott",
      audio: "https://path/to/sicko-mode-audio.mp3",
      songImage:
        "https://images.squarespace-cdn.com/content/v1/5aa7771212b13fa2b4ca6cb5/1539984935124-9YCU8PG4IK5LLUUP3BFP/travis+scott+sicko.png?format=1000w",
    },
    {
      id: 15,
      songName: "Chandelier",
      artist: "Sia",
      audio:
        "https://junkee.syd1.cdn.digitaloceanspaces.com/wp-content/uploads/2019/06/sia_4.png",
      songImage:
        "https://www.popiconsblog.com/uploads/9/9/4/4/9944728/behind-the-song-chandelier-by-sia-pop-icons-meaning_orig.jpg",
    },
    {
      id: 16,
      songName: "Bad Romance",
      artist: "Lady Gaga",
      audio: "https://path/to/bad-romance-audio.mp3",
      songImage: "https://s1.dmcdn.net/v/KIHFa1Yv5incRKqIz/x1080",
    },
    {
      id: 17,
      songName: "Radioactive",
      artist: "Imagine Dragons",
      audio: "https://path/to/radioactive-audio.mp3",
      songImage:
        "https://grantland.com/wp-content/uploads/2013/04/grant_interscope_imaginedragonsradioactive_64011.jpg?w=750",
    },
    {
      id: 18,
      songName: "No Tears Left to Cry",
      artist: "Ariana Grande",
      audio: "https://path/to/no-tears-left-to-cry-audio.mp3",
      songImage:
        "https://arhsharbinger.com/wp-content/uploads/2018/06/mgid_ao_image_mtv.jpg",
    },
    {
      id: 19,
      songName: "Diamonds",
      artist: "Rihanna",
      audio: "https://path/to/diamonds-audio.mp3",
      songImage:
        "https://www.billboard.com/wp-content/uploads/media/rihanna-diamond-vid-still-2016-billboard-1548.jpg",
    },
    {
      id: 20,
      songName: "Viva La Vida",
      artist: "Coldplay",
      audio: "https://path/to/viva-la-vida-audio.mp3",
      songImage:
        "https://nbhap.com/wp-content/uploads//2018/06/Coldplay-2008.jpg",
    },
    {
      id: 21,
      songName: "Truth Hurts",
      artist: "Lizzo",
      audio: "https://path/to/truth-hurts-audio.mp3",
      songImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC-J9H-NYtTItTYfTDq2UGX42v4oLUuJuUfpZ_253OvTLilAk_iA0Xo4AO_Zzap7CJ7vDHyfVylB8dijneSNNeDKD2zKnS1V0YaLOSOBJZMOnLK7UCjiLVpimSkwuThadAK7fYLhoTMSFjQuwML429ROmryjVxlybo_8O2FS0EZzwc-xjS23FhO15hV1I/s800/IMG-0109.PNG",
    },
    {
      id: 22,
      songName: "Someone Like You",
      artist: "Adele",
      audio: "https://path/to/someone-like-you-audio.mp3",
      songImage:
        "https://compote.slate.com/images/ca26f7f9-4fa3-49eb-944b-f30210fe1ccb.jpg?crop=3000%2C2141%2Cx0%2Cy0",
    },
    {
      id: 23,
      songName: "Despacito",
      artist: "Luis Fonsi ft. Daddy Yankee",
      audio: "https://path/to/despacito-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/9/92/Luis_Fonsi_-_Despacito.png",
    },
    {
      id: 24,
      songName: "Can't Stop the Feeling!",
      artist: "Justin Timberlake",
      audio: "https://path/to/cant-stop-the-feeling-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/Justin_Timberlake_-_Cant_Stop_the_Feeling.png",
    },
    {
      id: 25,
      songName: "Señorita",
      artist: "Shawn Mendes",
      audio: "https://path/to/senorita-audio.mp3",
      songImage:
        "https://www.billboard.com/wp-content/uploads/media/shawn-camila-senorita-screenshot-bb19-2019-billboard-1548.jpg",
    },
    {
      id: 26,
      songName: "Perfect",
      artist: "Ed Sheeran",
      audio: "https://path/to/perfect-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/Ed_Sheeran_-_Perfect.png",
    },
    {
      id: 27,
      songName: "I Like It",
      artist: "Enrique Iglesias",
      audio: "https://path/to/i-like-it-audio.mp3",
      songImage:
        "https://www.liveabout.com/thmb/AZwksODXQthm7W612HkeZD_2erw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/enrique-iglesias-i-like-it-5abfef9deb97de0037b931be.jpg",
    },
    {
      id: 28,
      songName: "The Middle",
      artist: "Zedd, Maren Morris, Grey",
      audio: "https://path/to/the-middle-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/Zedd_-_The_Middle.png",
    },
    {
      id: 29,
      songName: "Closer",
      artist: "The Chainsmokers ft. Halsey",
      audio: "https://path/to/closer-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/The_Chainsmokers_-_Closer.png",
    },
    {
      id: 30,
      songName: "I Will Always Love You",
      artist: "Whitney Houston",
      audio: "https://path/to/i-will-always-love-you-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/Whitney_Houston_-_I_Will_Always_Love_You.png",
    },
    {
      id: 31,
      songName: "Money",
      artist: "Lisa",
      audio: "https://path/to/money-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/Lisa_-_Money.png",
    },
    {
      id: 32,
      songName: "Savage Love",
      artist: "Jawsh 685 & Jason Derulo",
      audio: "https://path/to/savage-love-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Jawsh_685_and_Jason_Derulo_-_Savage_Love.png",
    },
    {
      id: 33,
      songName: "Shallow",
      artist: "Lady Gaga & Bradley Cooper",
      audio: "https://path/to/shallow-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/2/26/Lady_Gaga_and_Bradley_Cooper_-_Shallow.png",
    },
    {
      id: 34,
      songName: "Taki Taki",
      artist: "DJ Snake, Selena Gomez, Ozuna & Cardi B",
      audio: "https://path/to/taki-taki-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/DJ_Snake_-_Taki_Taki.png",
    },
    {
      id: 35,
      songName: "Finesse",
      artist: "Bruno Mars & Cardi B",
      audio: "https://path/to/finesse-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/1/16/Bruno_Mars_-_Finesse.png",
    },
    {
      id: 36,
      songName: "Toxic",
      artist: "Britney Spears",
      audio: "https://path/to/toxic-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Britney_Spears_-_Toxic.png",
    },
    {
      id: 37,
      songName: "Rolling in the Deep",
      artist: "Adele",
      audio: "https://path/to/rolling-in-the-deep-audio.mp3",
      songImage:
        "https://www.billboard.com/wp-content/uploads/media/Adele-Rolling-in-the-Deep-screenshot-2019-billboard-1500.jpg",
    },
    {
      id: 38,
      songName: "Sorry",
      artist: "Justin Bieber",
      audio: "https://path/to/sorry-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Justin_Bieber_-_Sorry.png",
    },
    {
      id: 39,
      songName: "I Gotta Feeling",
      artist: "The Black Eyed Peas",
      audio: "https://path/to/i-gotta-feeling-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Black_Eyed_Peas_-_I_Gotta_Feeling.png",
    },
    {
      id: 40,
      songName: "Happy",
      artist: "Pharrell Williams",
      audio: "https://path/to/happy-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Pharrell_Williams_-_Happy.png",
    },
    {
      id: 41,
      songName: "Havana",
      artist: "Camila Cabello ft. Young Thug",
      audio: "https://path/to/havana-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Camila_Cabello_-_Havana.png",
    },
    {
      id: 42,
      songName: "Closer",
      artist: "The Chainsmokers ft. Halsey",
      audio: "https://path/to/closer-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/The_Chainsmokers_-_Closer.png",
    },
    // {
    //   id: 43,
    //   songName: "God's Plan",
    //   artist: "Drake",
    //   audio: "https://path/to/gods-plan-audio.mp3",
    //   songImage: "https://upload.wikimedia.org/wikipedia/commons/4/46/Drake_-_God%27s_Plan.png",
    // },
    {
      id: 44,
      songName: "Girls Like You",
      artist: "Maroon 5 ft. Cardi B",
      audio: "https://path/to/girls-like-you-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Maroon_5_-_Girls_Like_You.png",
    },
    {
      id: 45,
      songName: "Wake Me Up",
      artist: "Avicii",
      audio: "https://path/to/wake-me-up-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/Avicii_-_Wake_Me_Up.png",
    },
    {
      id: 46,
      songName: "Work",
      artist: "Rihanna ft. Drake",
      audio: "https://path/to/work-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Rihanna_-_Work.png",
    },
    {
      id: 47,
      songName: "Counting Stars",
      artist: "OneRepublic",
      audio: "https://path/to/counting-stars-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/OneRepublic_-_Counting_Stars.png",
    },
    {
      id: 48,
      songName: "Don't Start Now",
      artist: "Dua Lipa",
      audio: "https://path/to/dont-start-now-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Dua_Lipa_-_Don%27t_Start_Now.png",
    },
    {
      id: 49,
      songName: "Levitating",
      artist: "Dua Lipa",
      audio: "https://path/to/levitating-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Dua_Lipa_-_Levitating.png",
    },
    {
      id: 50,
      songName: "Peaches",
      artist: "Justin Bieber ft. Daniel Caesar, Giveon",
      audio: "https://path/to/peaches-audio.mp3",
      songImage:
        "https://upload.wikimedia.org/wikipedia/commons/4/48/Justin_Bieber_-_Peaches.png",
    },
    {
      id: 51,
      songName: "Friends",
      artist: "Marshmallow",
      audio: "https://path/to/peaches-audio.mp3",
      songImage:
        "https://www.billboard.com/wp-content/uploads/media/marshmello-anne-marie-tonight-show-2018-billboard-1548.jpg",
    },
  ]);

  let Navigate=useNavigate()

  let filteredSongs = Song.filter(
    (i) => i.artist === SelectedArtist.artistName
  );

  return (
    <div>
      <div id="ParticularArtist_Main">
        <SideBar />

        <div id="ParticularArtist_Content">
          <div id="ParticularArtist_Top1">
            <img src={SelectedArtist.artistImage} alt="" />
            <div id="ParticularArtist_Top1_imgBox"></div>
          </div>

          {/* {console.log(SelectedArtist)} */}

          <div id="ParticularArtist_About">
            <div>
              <p>{SelectedArtist.artistName}</p>
              <p>
                <span>31,654,432</span> monthly listeners
              </p>
            </div>
            <div>{<Play size={20} fill="white" color="white"/>}</div>
          </div>

          <div id="ParticularArtist_Songs">
            {filteredSongs.map((i) => (
              <div className="ParticularArtist_Songs_box" key={i.id}>
                {/* <Link to={"/ListenSong"}> */}
                  <div className="ParticularArtist_Songs_a" onClick={()=>{
                    setSelectedSong(i)
                    Navigate("/ListenSong")
                  }}>
                    <img src={i.songImage} alt="" />
                    <div>
                      <p>{i.songName}</p>
                      <p>2,276,876</p>
                    </div>
                  </div>
                {/* </Link> */}

                <div className="ParticularArtist_Songs_b">{<Heart />}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
