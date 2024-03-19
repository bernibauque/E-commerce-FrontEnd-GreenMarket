import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importamos hooks de react-redux para usar el store y despachar acciones
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice'; // Importamos acciones y selectores del slice de contador
import styles from './Counter.module.css'; // importamos css para el contador

export function Counter() {
  const count = useSelector(selectCount); // Obtenemos el valor del contador del store utilizando el selector
  const dispatch = useDispatch(); // Obtenemos la función `dispatch` para despachar acciones al store
  const [incrementAmount, setIncrementAmount] = useState('2'); // Estado local para almacenar la cantidad de incremento

  const incrementValue = Number(incrementAmount) || 0; // Convertimos la cantidad de incremento a un número

  return (
    <div>
      {/* Botones para incrementar y decrementar el contador */}
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span> {/* Valor del contador */}
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      {/* Entrada de texto para establecer la cantidad de incremento */}
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        {/* Botones para agregar la cantidad establecida al contador */}
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        {/* Botón para agregar la cantidad de forma asíncrona */}
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        {/* Botón para agregar la cantidad solo si el contador es impar */}
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
