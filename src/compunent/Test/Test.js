import React, { useState } from 'react';

const Test = () => {
    const [count, setCount] = useState(0);
    const plus = () => {

        setCount(count + 1)

    }
    const minous = () => {

        if (count === 0) {
            setCount(0)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={plus} className='m-2 p-2'>+</button>
            <button onClick={minous} className='m-2 p-2'>-</button>
        </div>
    );
};

export default Test;