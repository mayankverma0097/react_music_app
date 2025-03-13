import React from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import GetStarted from './GetStarted.jsx'
import Home from "./Home.jsx"
import Artists from './Artists.jsx'
import ParticularArtist from './ParticularArtist.jsx'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        
        <Route path='/' element={<GetStarted/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Artists' element={<Artists/>}/>
        <Route path='/ParticularArtist' element={<ParticularArtist/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
