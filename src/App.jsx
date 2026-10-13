import React from 'react'
import { useState } from 'react'
// import "Num_Count.css"
import "./Num_Count.css"
function App() {
  let [count, setcount] = useState(0);

  function check_Negative() {
    if (count < 1) {
      Newmsg("Negative Number Not Allowed!")
      setcount(0)
      setTimeout(() => {
        Newmsg("")
      }, 1000);


    } else {
      setcount(count - 1)
    }
  }

  const [msg, Newmsg] = useState("")


  return (
    <div>
      <h1>Counter</h1>
      <h2>The Counter is : {count}</h2>

      <button onClick={() => { setcount(count + 1) }}>
        Tap me
      </button>

      <br></br><br></br>

      <button onClick={check_Negative}>-1</button>

      <p>{msg}</p>
    </div>
  )
}

export default App