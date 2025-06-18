// Slice -> Store -> Provider -> Selector/Dispatcher.

import { createSlice } from '@reduxjs/toolkit';

// A "slice" contains the reducer logic and actions for a single piece of state.
const counterSlice = createSlice({
    name: 'counter', // A unique name for the slice. Used as the prefix for generated action types.
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1; // Directly mutate the state (Redux Toolkit uses Immer under the hood)
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }  
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer; // Export the reducer to be used in the store