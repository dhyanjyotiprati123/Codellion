import React, { useState } from 'react'
import {BiMenuAltRight} from "react-icons/bi"

const Navbar = () => {
  const [mob, setMob]=useState(false)
    return (
        <div className="container">
          <div className="navbar">
            <div className="navbar-logo">
               Indicorp
            </div>
            <ul className={mob ? "navbar-list mobile": "navbar-list"}>
              <li className="navbar-item">Home</li>
              <li className="navbar-item">Product</li>
              <li className="navbar-item">Pricing</li>
              <li className="navbar-item">About</li>
            </ul>

            <div className="navbar-control" onClick={()=>setMob(!mob)}>
              <BiMenuAltRight style={{fontSize: "3rem"}} />
            </div>
          </div>  
        </div>
    )
}

export default Navbar
