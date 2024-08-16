import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {

  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const makeThibgs = () => {
    // alert(inputRef.current.value)
    resultRef.current.innerHTML = inputRef.current.value;
  }

  return (
    <div>
     <input type='text' ref={inputRef}/>  
     <button onClick={makeThibgs}>Hacer cosas</button>
     <div ref={resultRef}></div>
    </div>
  );
}

export default App;
