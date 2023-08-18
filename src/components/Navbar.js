import React from "react";
import {Link} from 'react-router-dom';


export default function Navbar() {
  
  return (
    <div className="topnav">
    <Link className="active" to="/">Album</Link>
    
    <div className="topnav-right">
      
      <Link to="/albumform">Add Album</Link>
      
       
    </div>
  </div>
  );
}
