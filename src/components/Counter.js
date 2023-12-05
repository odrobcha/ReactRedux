import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter); // react automaticly lunches subscriber
    const showCounter = useSelector(state=>state.counter.showCounterField);

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    };
    const increaseHandler = () =>{
        dispatch(counterActions.increase({value: 10})) // === {type : SOME_UNIQUE_IDENTOFIER, payload: 10} payload is given name
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    };

    const toggleCounterHandler = () => {
        dispatch (counterActions.toggle())


    };

    return (
      <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {showCounter && <div className={classes.value}>{counter}</div>}
          <div>
              <button onClick={incrementHandler}>Increment</button>
              <button onClick={increaseHandler}>Increase by 10</button>
              <button onClick={decrementHandler}>Decrement</button>
          </div>
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
};

export default Counter;
