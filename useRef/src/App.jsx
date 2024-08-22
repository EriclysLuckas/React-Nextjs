import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [numberRefValue, setNumberRefValue] = useState(0);

  const numberRef = useRef(0);

  useEffect(() => {
    numberRef.current = count * 10;
    setNumberRefValue(numberRef.current);
  }, [count]); 

  return (
    <div>
      <h1>O número do useRef é: {numberRefValue}</h1> 
      <h1>O contador é: {count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Incrementar Contador em 1
      </button>
    </div>
  );
}

export default App;
