import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [result, setResult] = useState(0);

  function changeFirstNumberHandler(event) {
    setFirstNumber(event.target.value);
  }

  function changeSecondNumberHandler(event) {
    setSecondNumber(event.target.value);
  }

  function addSumaHandler(event) {
    setResult(firstNumber + secondNumber);
  }

  function addRestaHandler(event) {
    setResult(firstNumber - secondNumber);
  }
 
  function addMultiplicacionHandler(event) {
    setResult(firstNumber * secondNumber);
  }
 
  function addDivisionHandler(event) {
    setResult(firstNumber / secondNumber);
  }

  function addNoverHandler(event) {
    setResult ("");
  }

 useEffect(() => {
    console.log("firstNumber state:", firstNumber);
  }
  );

  useEffect(() => {
    console.log("secondNumber state:", secondNumber);
  }
  );

  return (
    <>
      <h1>Calculadora</h1>
      <input
        type="text"
        value={firstNumber}
        onChange={changeFirstNumberHandler}
      />
      <p>
        <input
          type="text"
          value={secondNumber}
          onChange={changeSecondNumberHandler}
     />
      </p>
      <p>
        <button onClick={addSumaHandler} value="+"> + </button>
        <button onClick={addRestaHandler} value="-"> - </button>
        <button onClick={addMultiplicacionHandler} value="*"> * </button>
        <button onClick={addDivisionHandler} value="/"> / </button>
        <button onClick={addNoverHandler} value=""> C </button>
      </p>
      <p> Resultado : {result}</p>
    </>
  );
}

export default App;

/**
 * 
        <button onClick={}> M+ </button>
        <button onClick={}> MR </button>
 */