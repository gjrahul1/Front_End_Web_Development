//Updater Function
// Function send as an argument to useState

import React, {useState} from 'react';

function MyComponent () {
    const [car, setCar] = useState({year:2024,
                                    make:"Ford",
                                    model:"Mustand"});

    function handleYearChange(event) {
        setCar(car => ({...car,year: event.target.value}));
    }

    function handleModelChange(event) {
        setCar(c =>({...c,model: event.target.value}));
    }

    function handleMakeChange(event) {
        setCar(c=> ({...c,make: event.target.change}));
    }

    return (<div>
        <p>Your fav car: {car.make} {car.model} {car.year}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
        <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
    </div>);

}

export default MyComponent;