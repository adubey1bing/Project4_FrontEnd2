
import { Link } from "react-router-dom"

import {
Dashboard,
Description,
Menu,
Poll,
} from "@mui/icons-material"
import Chip from '@mui/material/Chip';
import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="head">
                <Dashboard />
                <span className="logo">Project 4</span>
            </div>
            <div className="middle">
                <ul>
                    <Link to="/">
                        <span><Chip icon={<Menu className="icon"/>} label="Home" variant="outlined" style={{ width: '200px' }}/></span>
                    </Link>
                    <Link to="/sentiment">
                        <span><Chip icon={<Description className="icon"/>} label="Sentiment Analysis" variant="outlined" style={{ width: '200px' }}/></span>
                    </Link>
                    <Link to="/engagement">
                        <span>
                            <Chip icon={<Poll className="icon"/>} label="Engagement Analysis" variant="outlined" style={{ width: '200px' }}/>
                        </span>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar