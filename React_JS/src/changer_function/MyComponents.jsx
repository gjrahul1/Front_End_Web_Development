//Updater Function
// Function send as an argument to useState

import React, {useState} from 'react';

function MyComponent () {

    const [count,setCount] = useState(0);
    
    function increment() {
        // Updates 2 times in Queue (Data Structure)
      setCount(c => c + 1);
      setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c-1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
   <p>Count: {count}</p>
   <button onClick={increment}>Increment</button>
   <button onClick={decrement}>Decrement</button>
   <button onClick={reset}>Reset</button>
         </div>
    );

}

export default MyComponent;