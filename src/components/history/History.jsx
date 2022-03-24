import { useEffect, useRef, useState } from "react";

/**Crea la estructura básica del componente. Ha de recibir un `prop` al que llamaremos `results`.
 * @param {*} param0 
 * Utiliza `results.map` para obtener un array de elementos `li`. Llama al array `liArray`.*/
 

function historial({results}) {
    const liArray = results.map(
        Element=>
                    <li>{Element}</li>  
    )
    // La salida del componente ha de ser un elemento `ol` que contenga los elementos de `liArray`.   
return (
    <>
           <ol>
                {liArray}
           </ol>   
    </>
);        
}
// Y lo ponemos a disposición de otros componentes
export default historial;