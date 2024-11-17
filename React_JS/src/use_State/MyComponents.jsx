// {UseState} function

    //Set function is name
    // Setter function is SetName
    // Updating name is not possible use Set function
    // Virtual DOM wouldn't be activated in Set function

import React, {useState} from 'react';

function MyComponent () {


    const [name,SetName] = useState('Guest');

    const [age,SetAge] = useState(0);

    const [isEmployed, setEmployed] = useState(false);

    const updateName = () => {
        SetName("Dolly ");
    }

    const updateAge = () => {
        SetAge(age + 10);

    }

    const EmployeeStat = () => {
        setEmployed(!isEmployed);
    }



    return (
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age:{age}</p>
            <button onClick={updateAge}>Set Age</button>

            <p>Is Employed:{isEmployed ? "Yes" : "No"}</p>
            <button onClick={EmployeeStat}>Set Employee State</button>
        </div>
    );

}

export default MyComponent;