import React,{Component}from "react"
import  "./Timeline.css";
import TimeItem from "../TimeItem";

export default class Timeline extends Component {
 


    render(){
        return (
            <div className="timeLine-container">

            <TimeItem />

            <TimeItem/>

            <TimeItem/>

            </div>
        );
    }

}

 