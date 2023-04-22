import React, {useState} from "react"
// import boxes from "../boxes"


export default function Box(props){
    const [on,setOn] = useState(props.on)
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
      }

//     function toggle(){
//        setOn(prevOn => !prevOn) 
//    }  

    return(
        <div 
        style={styles} 
        className="boxes" 
        onClick={props.handleClick}
        >
        </div>
    )
}