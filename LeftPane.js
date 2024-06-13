import React from 'react'
import "./leftPane.css"
import { AiFillFileAdd } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import profile from "../../Assets/profile.jpg";
import { useNavigate } from 'react-router';

const LeftPane = () => {
  const navigate = useNavigate();
  return (
    <div className='left_pane'>
        <h1 style={{color: "#fff"}}>INS</h1>
            <img src={profile} style={{width: "50px", height: "50px", borderRadius: "50%", marginTop: "20px", marginBottom:"10px"}}/>
        <ul>
            <li><FaUserAlt style={{transform: "translateY(2px)", marginRight:"5px"}} />Profile</li>
            <li  onClick={() => {localStorage.removeItem("token");navigate("/")}} ><RiLogoutBoxRFill style={{transform: "translateY(2px)", marginRight:"5px"}}/>Logout</li>
        </ul>
    </div>
  )
}

export default LeftPane