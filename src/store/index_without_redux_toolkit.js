const redux = require('redux');

const counterReducer = (state = initialState, action) =>{
    if (action.type === 'increment'){
        return {
            counter : state.counter + 1,
            showCounterField : state.showCounterField
        }
    }
    if (action.type === 'increase'){
        return {
            counter : state.counter + action.amount,
            showCounterField : state.showCounterField
        }
    }
    if (action.type === 'decrement'){
        return {
            counter :  state.counter - 1,
            showCounterField : state.showCounterField
        }
    }
    if(action.type === 'toggle'){
        return {
            counter :  state.counter,
            showCounterField : !state.showCounterField
        }
    }
    return state
}



const store = redux.createStore(counterReducer);

console.log("TEst store");
console.log(store.getState());

export default store;
