import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ firstNumber, setFirstNumber ] = useState(null);
  const [ secondNumber, setSecondNumber] = useState (null);
  const [ result, setResult] = useState (0);

  
  function changeFirstNumberHandler (event) {
    setFirstNumber(event.target.value);
  }

  function changeSecondNumberHandler (event) {
    setSecondNumber (event.target.value);
  }

  useEffect(
    ()=>{
      console.log("firstNumber state:", firstNumber);
    }
  )

  useEffect(
    ()=>{
      console.log("secondNumber state:", secondNumber);
    }
  )

  function addSumaHandler (result,setResult) {
      return parseFloat (setResult);}
   
  
 /** function changeCheckboxHandler () {
    setResult( result );
  }
*/ 
  return (
    <>
      <h1>Calculadora</h1>
         <input type="text" value={firstNumber} onChange={changeFirstNumberHandler}/>
      <p>
         <input type="text" value={secondNumber} onChange={changeSecondNumberHandler}/>
      </p>
      <p>
        <button onClick={addSumaHandler} checked={result}> + </button>
        <button onClick={result}> - </button>
        <button onClick={result}> * </button>
        <button onClick={result}> % </button>
        <button onClick={result}> C </button>
        <button onClick={result}> M+ </button>
        <button onClick={result}> MR </button>
      </p>
      <p> 
        <input type= "text"  value={result} onChange={addSumaHandler}/>
      </p>
    </>
  );
  }
  
/**<p>
        <input type="checkbox" checked={result} onChange={changeCheckboxHandler}/> 
        <button onClick={sumaContador}> + </button> />
      </p>
      */
export default App;
