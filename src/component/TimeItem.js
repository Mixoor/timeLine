import React,{useState} from "react";
import Time from "./Time";


const TimeItem =(props)=>{
    const [cssClass,setcssClass] =useState("timeLine-container-item-content");


    return(
        <div className="timeLine-container-item">
        <div className={cssClass} onMouseOver={()=>{setcssClass("timeLine-container-item-content arrow")}} 
        onMouseLeave={()=>{setcssClass("timeLine-container-item-content")}}>
            <h4>Subject-00 </h4>
            <Time>2010-2015</Time>
            <p>Some descriptive text about subject ....</p>
        </div>
        </div>


    );
}

export default TimeItem;