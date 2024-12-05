import React, { useEffect, useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import "./Darkmode.css"
function Darkmode() {
    const [mode,setMode]=useState("darkmode")
    function toggle(){
        if(mode==="darkmode")
            setMode("lightmode")
        else
        setMode("darkmode")
    }
    useEffect(()=>{
document.body.className=mode
    },[mode])
  return (
    <button className= "darkmodebtn"onClick={()=>{
        toggle()
    }}>{mode==="darkmode"?<MdOutlineWbSunny />:<IoMoonSharp />}</button>
  )
}

export default Darkmode