import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

// La siguiente función nos permite realizar lógica asíncrona. 
// Se puede enviar como una acción normal: `dispatch(incrementAsync(10))`. Este
// llamará al procesador con la función `dispatch` como primer argumento. asíncrono
// Luego se puede ejecutar el código y se pueden enviar otras acciones.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // El valor que devolvemos se convierte en la carga útil de la acción "cumplida"
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // El campo `reductores` nos permite definir reductores y generar acciones asociadas
  reducers: {
    increment: (state) => {
      // Redux Toolkit nos permite escribir lógica "mutante" en reductores. Él
      // en realidad no muta el estado porque usa la biblioteca Immer,
      // que detecta cambios en un "estado borrador" y produce un nuevo
      // estado inmutable basado en esos cambios
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Usa el tipo PayloadAction para declarar el contenido de `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // El campo `extraReducers` permite que el segmento maneje acciones definidas en otro lugar,
  // incluyendo acciones generadas por createAsyncThunk o en otros sectores.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// La siguiente función nos permite seleccionar un valor de el estado
// Los selectores también se pueden definir en línea donde se usan en lugar de
// en el archivo de segmento. Por ejemplo: `useSelector((estado: RootState) => estado.contador.valor)`
export const selectCount = (state) => state.counter.value;

// También podemos escribir procesadores a mano, que pueden contener lógica tanto sincronizada como asíncrona.
// Aquí hay un ejemplo de acciones de envío condicional según el estado actual.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
