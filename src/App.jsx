
import { useContext } from "react"
import Chatsec from "./Components/chatsec/chatsec"
import Sidebar from "./Components/Sidebar/sidebar" 
import Seperation from "./separation/Separation"
import { dataContext } from "./context/UserContext"

function App() {
// let data=useContext(dataContext)

  return (
    <>
      <Sidebar/>
      <Seperation/>
      <Chatsec/>
    </>
  )
}

export default App
