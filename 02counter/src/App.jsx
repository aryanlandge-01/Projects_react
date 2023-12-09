import { useState } from "react"
import './App.css'

function App() {


  const [counter ,setCounter] = useState(5)

  const addValue = () => {
    if (counter === 20 || counter > 20) {
      return
    }
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  const removeValue = () => {
    if(counter === 0 || counter < 0) {
      return 
    }
    setCounter(counter - 1);
  }


  return (
       <div>
        <h1>hello</h1>
        <h2>Counter value: {counter}</h2>


        <button onClick={addValue} >Add + </button>
        <br/>
        <br/>
        
        <button onClick={removeValue}>Sub - </button>
       </div>
  )
}

export default App;
