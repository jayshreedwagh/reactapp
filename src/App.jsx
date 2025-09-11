import  { useState } from "react"

const App =() =>{ 
  const [user, setA]=useState("Sau")
  const changeUSer = () =>{
    setA("Jayu")
  }
  return (
    <div>
    <h1>Username is {user}</h1>
    <button onClick={changeUSer}>Chane User</button>
    </div>
  )
} 
export default App