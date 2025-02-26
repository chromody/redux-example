import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter?.count);
    const dispatch = useDispatch();
    console.log(count);

    return (
        <>
            <div className="App">
                <h1>Counter: {count}</h1>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </>
    )
}

export default Counter;