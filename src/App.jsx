import { useState } from "react"

const App =() =>{ 
  
  const [username, changeUser]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault()

    console.log(username)

    changeUser('')
  }
  
  return (
    <div>
    <form onSubmit={(e)=>submitHandler(e)}>
      <input value={username}
      onChange={(e)=>
        changeUser(e.target.value)
      }
      type="text" placeholder="Enter Your Name"
      />
      <button>Submit</button>
    </form>
    </div>
  )
} 
export default App