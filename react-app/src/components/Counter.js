import React, { useState } from 'react';
import counter from './counter.css'

function Counter() {

    let [count, setCount] = useState(0);

    function incrementCounter() {
        setCount(++count);
    }

    const decrementCounter = () => {
        setCount(--count);
    }
    return (
        <>
            <p>Increment Counter: {count}</p>
            <button onClick={incrementCounter}>Counter</button>
            <p>Decrement Counter: {count}</p>
            <button onClick={decrementCounter}>Counter</button>
        </>
    )
}

export default Counter;