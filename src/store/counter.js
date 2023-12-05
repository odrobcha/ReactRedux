import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    counter : 0,
    showCounterField: true
};
const counterSlice = createSlice({
    name: 'counter',
    initialState : initialCounterState,
    reducers : {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload.value
        },
        toggle(state){
            state.showCounterField = !state.showCounterField
        }
    }
});

export const counterActions = counterSlice.actions;  //to have access  to all reducer from outside
export default counterSlice.reducer;
