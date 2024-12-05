import { useContext } from 'react'
import "./chatsec.css"
import Darkmode from '../Darkmode/Darkmode'
import { LuSendHorizonal } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import ai from "../assets/ai.png"
import user from "../assets/user.png"


function Chatsec() {
    let {sent,input,setInput,showResult,resultData,recentPrompt,loading}=useContext(dataContext)
  return (
    <div className= 'chatsection'>
<div className= 'topsec'>
{!showResult?<div className= 'headings'>
    <span>HELLO DEVRAJ,</span>
    <span>I&apos;m Your Own Assistant</span>
    <span>What can I help you...?</span>
</div>:<div className= 'result'>
    <div className= 'userbox'>
        <img src={user} alt='' width="60px"/>
        <p>{recentPrompt}</p>
    </div>
    <div className= 'aibox'>
    <img src={ai} alt='' width="60px"/>
    {
        loading?<div className= 'loader'>
           <hr />
            <hr />
            <hr />
        </div>: <p>{resultData}</p>
    }
    </div>
</div>}

</div>
<div className= 'bottomsec'>
<input onChange={(e)=>setInput(e.target.value)} type= 'text'
placeholder= 'Enter a prompt' value={input}/>
{input?<button id= 'sendbtn' onClick={()=>{
    sent(input)
}}><LuSendHorizonal /></button>:null}

<Darkmode/>
</div>
    </div>
  )
}

export default Chatsec