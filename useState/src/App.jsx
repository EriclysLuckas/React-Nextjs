import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [reverse, setReverse] = useState(false);
  const [count,setCount] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

    const handleClick = () =>{
      setReverse( !reverse)
    }
    const handleIncrement = () =>{
      setCount(count + 1)
    }
  return (
    <>
      <div className="App">
       <header>

          <img src={reactLogo}
          className={`logo ${reverseClass}`} alt="React logo" />
          <button type="button" onClick = {handleClick} >
             Reverse
          </button>
          <button type="button" onClick = {handleIncrement}  >
             Increment : {count}
          </button>
          <h1>Contador : {count}</h1>
       </header>



      </div>



    </>
  )
}

export default App
