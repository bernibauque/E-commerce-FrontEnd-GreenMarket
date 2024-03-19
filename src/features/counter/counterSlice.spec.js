// Puebas Unitarias - slice de Redux (reducers)

// Importa el reducer y las acciones del slice del contador
import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './counterSlice';

// Describe las pruebas para el reducer del contador
describe('counter reducer', () => {
  // Define el estado inicial del contador
  const initialState = {
    value: 3,
    status: 'idle',
  };

  // Prueba el manejo del estado inicial 
  it('should handle initial state', () => {
    // Comprueba si el reducer maneja correctamente el estado inicial
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  // Prueba el manejo de la acción de incremento
  it('should handle increment', () => {
    // Dispara la acción de incremento y verifica el resultado
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  // Prueba el manejo de la acción de decremento
  it('should handle decrement', () => {
    // Dispara la acción de decremento y verifica el resultado
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  // Prueba el manejo de la acción de incremento por cantidad
  it('should handle incrementByAmount', () => {
    // Dispara la acción de incremento por cantidad y verifica el resultado
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
