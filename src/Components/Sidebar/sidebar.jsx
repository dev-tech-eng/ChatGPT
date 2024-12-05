import React, { useContext, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaPlus, FaRegMessage } from "react-icons/fa6"
import "./sidebar.css"
import { dataContext } from "../../context/UserContext"

function Sidebar() {
  const [extend, setExtend] = useState(false)
  const { sent, prevPrompt,newchat } = useContext(dataContext)
async function loadPrevPrompt(prompt){
  sent(prompt)
}
  return (
    <div className= "sidebar">
      <GiHamburgerMenu
        id="ham"
        onClick={() => setExtend((prev) => !prev)}
      />

      <div className= "newchat" onClick={()=>{
        newchat()
      }}>
        <FaPlus />
        {extend?<p>New Chat</p>:null}
      </div>
{prevPrompt.map((item,index) => {
  return(<div className= "recent" key={index} onClick={()=>{
    loadPrevPrompt(item)
  }}>
            <FaRegMessage />
            {extend?<p>{item.slice(0,10)+"..."}</p>:null}
          </div>)
  
})}

        
      </div>
  )
}

export default Sidebar
