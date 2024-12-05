import React, { createContext, useState } from "react"
import run from "../gemini"

export const dataContext = createContext()

function UserContext({ children }) {
  const [input, setInput] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultData, setResultData] = useState("")
  const [recentPrompt, setRecentPrompt] = useState("")
  const [prevPrompt, setPrevPrompt] = useState([])

  function newchat(){
    setShowResult(false)
    setLoading(false)
  }
  async function sent(input) {
    try {
      setResultData("")
      setShowResult(true)
      setRecentPrompt(input)
      setLoading(true)
      setPrevPrompt((prev) => [...prev, input])
      const response = await run(input)
      setResultData(
        response.includes("**") || response.includes("*")
          ? response.split(/[*]+/)
          : response
      )
      setLoading(false)
    } catch (error) {
      console.error("Error in sent function:", error)
      setLoading(false)
    } finally {
      setInput("")
    }
  }

  const data = {
    input,
    setInput,
    sent,
    loading,
    setLoading,
    showResult,
    setShowResult,
    resultData,
    setResultData,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    newchat
  }

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext
