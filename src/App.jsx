import React,{useState} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./GetStarted.jsx";
import Home from "./Home.jsx";
import Artists from "./Artists.jsx";
import ParticularArtist from "./ParticularArtist.jsx";
import ListenSong from "./ListenSong.jsx";

export default function App() {
  let [SelectedArtist,setSelectedArtist]=useState()
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Artists" element={<Artists setSelectedArtist={setSelectedArtist}/>} />
          <Route path="/ParticularArtist" element={<ParticularArtist SelectedArtist={SelectedArtist}/>} />
          <Route path="/ListenSong" element={<ListenSong />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
