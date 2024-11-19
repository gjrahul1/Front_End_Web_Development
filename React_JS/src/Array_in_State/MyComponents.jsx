//Updater Function
// Function send as an argument to useState

import React, {useState} from 'react';

function MyComponent () {
   
    const [Foods,setFoods] = useState(['Apple','Banana','Mango']);

    function handleFood(e) {

        const newFood = document.getElementById("foodInput").value;

        document.getElementById("foodInput").value = "";

        setFoods(F => [...F,newFood]);
    }

    function removeFood(index) {

        setFoods(Foods.filter((_,i) => i !== index));
    }
    return (<div>
        <h2>List of foods</h2>
        <ul>

            {Foods.map(
                (Foods,index)=> 
                <li key={index} onClick={() => removeFood(index)}> 
                        {Foods}
                </li>)}

        </ul>

        <input type="text" id="foodInput" placeholder='Enter food name'/>

        <button onClick={handleFood}>Add Food</button>
        </div>)

}

export default MyComponent;