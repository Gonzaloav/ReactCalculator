import { useEffect, useRef, useState } from "react";
import "./App.css";
import History from './components/history/History.jsx';

function App() {
  /**Siempre que declaro un state se almacenan estos dos nombres =
   * uno para almacenar y otro para cambiar (set..)*/

  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [result, setResult] = useState(0);
  const memoria = useRef (0); /**  recopilar datos no mostrarlos. */
  const[resultadoHistorial, setResultadoHistorial] = useState([]); 

  function changeFirstNumberHandler(event) {
    setFirstNumber(parseFloat (event.target.value)
    );
  }

  function changeSecondNumberHandler(event) {
    setSecondNumber(parseFloat(event.target.value)
    );
  }

  function addSumaHandler(event) {
    setResult(firstNumber + secondNumber);
  } // Suma

  function addRestaHandler(event) {
    setResult(firstNumber - secondNumber);
  } // Resta
 
  function addMultiplicacionHandler(event) {
    setResult(firstNumber * secondNumber);
  } // multiplicacion
 
  function addDivisionHandler(event) {
    setResult(firstNumber / secondNumber);
  } // Division

  function addMoverHandler(event) {
    setResult ("");
  }  // borrar los datos 

  function addAlmacenarHandler(event) {
    memoria.current = result; console.log(memoria.current);
  } /**  Añade un botón "M+" que almacene el valor de `result` 
  en un hook "ref". Llama `memory` al ref.*/

  function addCopiarValorHandler(event) {
    setSecondNumber(memoria.current);
  }//copie el valor de `memory` en `secondNumber`.


 useEffect(
   () => {
    console.log("firstNumber state:", firstNumber);
  }
  );

  useEffect(
    () => {
    console.log("secondNumber state:", secondNumber);
  }
  );

  useEffect(
    () => {
    console.log("M+:", memoria);  
    console.log("result state:", result);
  }
  );/**  Añade un botón "M+" que almacene el valor de `result` 
  en un hook "ref". Llama `memory` al ref.*/


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
        <button onClick={addMoverHandler} value=""> C </button>
        <button onClick={addAlmacenarHandler} ref={memoria} value="M+"> M+ </button> 
        <button onClick={addCopiarValorHandler} value="MR"> MR </button>
      </p>
      <p> Resultado : {result}</p>
    </>
  );
}

export default App;
