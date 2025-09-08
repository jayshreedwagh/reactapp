import  { useState } from "react"

const App =() =>{
  let user="Jayshree"
  
  const changeUser = () =>{
    user="Ram"
  }

  return (
    <div>
    <h1>Username is {user}</h1>
    <button onClick={changeUser}>Chane User</button>
    </div>
  )
} 
export default App