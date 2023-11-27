
import Avatar from "../assets/ProfilePic2.jpg"
import landing1 from "../assets/landing-bg.jpg"
import landing2 from "../assets/landing2.jpg"
import landing from "../assets/landing.jpg"

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




export default function ProfileList() {

  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const handleonebhk = () => {
    navigate("/1bhk");
  }
  return (
    <div></div>     
    
  )
            
}

