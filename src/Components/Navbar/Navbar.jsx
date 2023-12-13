import React, {useState, useEffect } from "react";
import
{ 
    ChatBubbleOutlineRounded,
    DarkModeOutlined,
    FullscreenExitOutlined,
    LanguageOutlined,
    ListOutlined,
    NotificationsNoneOutlined,
    SearchOutlined,
} 

from "@mui/icons-material"
import Avatar from '@mui/material/Avatar';
import "./navbar.scss"
import naruto from '../../Assets/Images/naruto.png'

import { useContext } from "react"
import { DarkModeContext } from "../../Context/darkModeContext";
import LinearProgress from '@mui/material/LinearProgress';

const Navbar = ()=>{
const {dispatch} = useContext(DarkModeContext)
const [loading, setLoading] = useState(false);

// Simulating loading for demonstration purposes
useEffect(() => {
    const interval = setInterval(() => {
      // Toggle loading state to keep the LinearProgress running
      setLoading((prevLoading) => !prevLoading);
    }, 3000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []); 
    return (
        
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <SearchOutlined className="icon" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon" />
                        English
                    </div>
                    <div className="item" onClick={()=>{
                        dispatch({type:"TOGGLE"})
                    }}>
                        <DarkModeOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon"/>
                        <div className="notif-counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineRounded className="icon"/>
                        <div className="notif-counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <Avatar alt="Remy Sharp" src={naruto} />
                    </div>
                </div>
            </div>
            {loading && <LinearProgress color="secondary" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />}
        </div>
    )
}


export default Navbar