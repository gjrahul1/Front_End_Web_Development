// useEffect(function,[dependancies])

import React, {useState, useEffect} from 'react';

function MyComponent () {
   
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green");

    useEffect(() => {
    document.title = `My Counter Program`;
    }, [count]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subCount() {
        if(count > 0) {
            setCount(c => c - 1);
        }
    }

    function changeColor() {
        setColor(c => c ==="green" ? "red" : "green");
    }

    return(<div>
        <p style={{color: color}}>Count: {count}</p>

        <button onClick={addCount}>Add</button>

        <button onClick={subCount}>Sub</button> <br/>

        <button onClick={changeColor}> Change Color</button>
    </div>);

}

export default MyComponent;