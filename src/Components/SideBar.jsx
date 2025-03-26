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
          <li><Link to={"/Home"}> <House size={20}  />  <span className='SideBar_P'>Home</span></Link></li>
            
            <li> <Link to={"/Home"}> <Search size={20}  />  <span className='SideBar_P'>Search</span></Link></li>

            <li><Link to={"/Home"}> <BookOpen size={20}  />  <span className='SideBar_P'>Library</span></Link></li>
        </ul>
     </div>
    </div>
  )
}
