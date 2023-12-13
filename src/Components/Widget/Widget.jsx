import "./widget.scss"
import {
    InsertEmoticon,
    KeyboardArrowUp,
} from "@mui/icons-material"

const Widget = ({type, value , percentage})=>{
    let data
    data = {
        title:type,
        icon:<InsertEmoticon className="icon" style={{color:"white", backgroundColor:"rgba(0, 0, 0, 0.2)"}} />
    }



    return (
        <div className="widget">
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">{data.isMoney && "$"}{value}</div>
                <div></div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {percentage}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget