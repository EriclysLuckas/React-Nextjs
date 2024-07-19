import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [counter, setCounter] = useState(0);
const [counter2, setCounter2] = useState(0);

// useEffect(()=>{
// console.log('atualizou o componente')
// })

// useEffect(()=>{
//   console.log('atualizou o apenas o counter1:'+ counter)
//   },[counter])
//   useEffect(()=>{
//     console.log('atualizou o apenas o counter2:'+ counter2)
//     },[counter2])
  
useEffect(() =>{
  console.log('C1:'+ counter +'  '+ 'C2:'+ counter2)

},[counter, counter2])
  return (
    <>
      <div >
        <h1>Counter: {counter}</h1>
        <h1>Counter: {counter2}</h1>

        <button onClick = {()=> setCounter(counter+1)}> Counter 1</button>
        <button onClick = {()=> setCounter2(counter2+1)}> Counter 2</button>

      </div>
    </>
  )
}

export default App
