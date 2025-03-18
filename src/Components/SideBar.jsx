import React from 'react'
import "./SideBar.css"
import { House,Search,BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div>
     <div id="SideBar_Main">
      <p id='SideBar_Main_siteName'><Link to={"/"}>WaveTune</Link></p>
      
        <ul>
          <li><Link to={"/Home"}> <House size={20}  />  Home</Link></li>
            
            <li> <Search size={20}/>  Search</li>
            <li><BookOpen size={20} />  Library </li>
        </ul>
     </div>
    </div>
  )
}
