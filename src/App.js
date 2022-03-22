import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useStat(null);
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

 
 
 
 
 useEffect(() => {
    console.log("firstNumber state:", firstNumber);
  });

  useEffect(() => {
    console.log("secondNumber state:", secondNumber);
  });

 
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
        <button onClick={addSumaHandler} value="+">
          {" "}
          +{" "}
        </button>
        <button onClick={addRestaHandler} value="-">
          {" "}
          -{" "}
        </button>
        <button onClick={addMultiplicacionHandler} value="*">
          {" "}
          *{" "}
        </button>
        <button onClick={addDivisionHandler} value="/">
          {" "}
          /{" "}
        </button>
        <button onClick={}> C </button>
        <button onClick={}> M+ </button>
        <button onClick={}> MR </button>
      </p>
      <p> Resultado : {result}</p>
    </>
  );
}

/**<p>
        <input type="checkbox" checked={result} onChange={changeCheckboxHandler}/> 
        <button onClick={sumaContador}> + </button> />
      </p>
      */
export default App;
