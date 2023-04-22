import React from "react"
import boxes from "../boxes"


export default function Box(props){
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
      }

    return(
        <div style={styles} className="boxes" ></div>
    )
}